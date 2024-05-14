import { AxiosResponse } from 'axios'
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'

import {
  ACCESS_USER_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  HEADERS_CONTENT_TYPE_FORM_URLENCODED,
  GET_USERS_API_URL,
} from 'constants/auth'
import { Api } from 'api'
import { IAuthUser, IUser } from 'models'

const apiUrl = process.env.REACT_APP_API_URL
const refreshUserAccessTokenUrl = `${apiUrl}oauth/token`

const headersContentTypeFormUrlencoded = HEADERS_CONTENT_TYPE_FORM_URLENCODED

const getLoggedInUserUrl = GET_USERS_API_URL

export const refreshUserAccessToken = () => {
  const refreshToken = getCookie(REFRESH_TOKEN_KEY) as string

  const params = new URLSearchParams()
  params.append('refresh_token', refreshToken)

  return Api.post(refreshUserAccessTokenUrl, params, {
    headers: {
      'Content-type': headersContentTypeFormUrlencoded,
    },
  }).then(async (response: AxiosResponse<IAuthUser>) => {
    removeCookie(REFRESH_TOKEN_KEY)
    const newAccessUserToken = response.data.access_token
    const newRefreshToken = response.data.refresh_token

    setCookie(ACCESS_USER_TOKEN_KEY, newAccessUserToken)
    setCookie(REFRESH_TOKEN_KEY, newRefreshToken)

    return response.data
  })
}

export const clearSession = () => {
  removeCookie(ACCESS_USER_TOKEN_KEY)
  removeCookie(REFRESH_TOKEN_KEY)
}

export const getLoggedInUser = () => {
  return Api.get(getLoggedInUserUrl).then((response: AxiosResponse<IUser>) => {
    return response.data
  })
}
