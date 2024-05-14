import { APP_PREFIX } from './general'

export const ACCESS_USER_TOKEN_KEY = `${APP_PREFIX}accessUserToken`
export const REFRESH_TOKEN_KEY = `${APP_PREFIX}refreshToken`

export const HEADERS_CONTENT_TYPE_FORM_URLENCODED = 'application/json'

export const INVALID_TOKEN = 'invalid_token'
export const INVALID_ACCESS_TOKEN_DESCRIPTION = 'Access token expired'
export const INVALID_REFRESH_TOKEN_DESCRIPTION = 'Invalid refresh token (expired)'

export const REDIRECT_LOGOUT_KEY = `${APP_PREFIX}redirectLogout`

export const GET_USERS_API_URL = 'api/v1/FUTSAL/users'
