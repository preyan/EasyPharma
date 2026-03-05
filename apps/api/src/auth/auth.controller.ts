import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Login and receive access + refresh tokens' })
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Rotate refresh token' })
    refresh(
        @CurrentUser()
        user: { sub: string; refreshToken: string },
    ) {
        return this.authService.refresh(user.sub, user.refreshToken);
    }

    @Post('logout')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Logout and invalidate refresh token' })
    logout(@CurrentUser() user: { userId: string }) {
        return this.authService.logout(user.userId);
    }

    @Get('me')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current authenticated user' })
    me(@CurrentUser() user: { userId: string }) {
        return this.authService.getMe(user.userId);
    }
}
