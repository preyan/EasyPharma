export const APP_NAME = 'EasyPharma';
export const API_BASE_URL = 'http://localhost:3000/api';

export const AUTH_STORAGE_KEYS = {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
    USER: 'user',
};

export const ROLES = {
    ADMIN: 'ADMIN',
    PHARMACIST: 'PHARMACIST',
    CLERK: 'CLERK',
} as const;

export type AppRole = typeof ROLES[keyof typeof ROLES];
