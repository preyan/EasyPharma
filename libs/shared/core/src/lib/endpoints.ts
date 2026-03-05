import { API_BASE_URL } from './constants';

export const ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        REGISTER: `${API_BASE_URL}/auth/register`,
        REFRESH: `${API_BASE_URL}/auth/refresh`,
        LOGOUT: `${API_BASE_URL}/auth/logout`,
        ME: `${API_BASE_URL}/auth/me`,
    },
    INVENTORY: {
        MEDICATIONS: `${API_BASE_URL}/inventory/medications`,
        STOCK: `${API_BASE_URL}/inventory/stock`,
    },
};
