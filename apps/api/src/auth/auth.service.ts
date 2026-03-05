import {
    ConflictException,
    ForbiddenException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@easy-pharma/shared-prisma';
import type { LoginDto } from './dto/login.dto';
import type { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }

    async register(dto: RegisterDto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existing) throw new ConflictException('Email already registered');

        const hashed = await bcrypt.hash(dto.password, 12);
        const user = await this.prisma.user.create({
            data: { name: dto.name, email: dto.email, password: hashed },
        });

        const tokens = await this.generateTokens(user.id, user.email, user.role);
        await this.storeRefreshToken(user.id, tokens.refreshToken);
        return { user: this.sanitizeUser(user), ...tokens };
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) throw new UnauthorizedException('Invalid credentials');

        const passwordMatch = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatch) throw new UnauthorizedException('Invalid credentials');

        const tokens = await this.generateTokens(user.id, user.email, user.role);
        await this.storeRefreshToken(user.id, tokens.refreshToken);
        return { user: this.sanitizeUser(user), ...tokens };
    }

    async refresh(userId: string, rawRefreshToken: string) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user?.refreshToken) throw new ForbiddenException('Access denied');

        const tokenMatch = await bcrypt.compare(rawRefreshToken, user.refreshToken);
        if (!tokenMatch) throw new ForbiddenException('Access denied');

        const tokens = await this.generateTokens(user.id, user.email, user.role);
        await this.storeRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }

    async logout(userId: string) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
    }

    async getMe(userId: string) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new UnauthorizedException();
        return this.sanitizeUser(user);
    }

    private async generateTokens(userId: string, email: string, role: string) {
        const payload = { sub: userId, email, role };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
                expiresIn: '15m',
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
                expiresIn: '7d',
            }),
        ]);
        return { accessToken, refreshToken };
    }

    private async storeRefreshToken(userId: string, token: string) {
        const hashed = await bcrypt.hash(token, 12);
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: hashed },
        });
    }

    private sanitizeUser(user: {
        id: string;
        email: string;
        name: string;
        role: string;
        createdAt: Date;
    }) {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            createdAt: user.createdAt,
        };
    }
}
