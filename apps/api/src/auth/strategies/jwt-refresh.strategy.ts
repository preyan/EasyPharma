import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { JwtPayload } from './jwt.strategy';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
    Strategy,
    'jwt-refresh',
) {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
            passReqToCallback: true,
        });
    }

    validate(req: Request, payload: JwtPayload) {
        const headers = req.headers as unknown as Record<string, string>;
        const authHeader = headers['authorization'];
        const refreshToken = authHeader?.replace('Bearer ', '') ?? '';
        return { ...payload, refreshToken };
    }
}
