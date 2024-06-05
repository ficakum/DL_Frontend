import { AxiosResponse } from 'axios'
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'

import {
  ACCESS_USER_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  HEADERS_CONTENT_TYPE_FORM_URLENCODED,
  GET_USERS_API_URL,
  REFRESH_TOKEN_API_URL,
} from '../constants/auth'
import { Api } from '../api'
import { IAuthUser, IUser, Roles } from '../models'

const apiUrl = process.env.REACT_APP_API_URL
const refreshUserAccessTokenUrl = `${apiUrl}${REFRESH_TOKEN_API_URL}`

const headersContentTypeFormUrlencoded = HEADERS_CONTENT_TYPE_FORM_URLENCODED

const getLoggedInUserUrl = GET_USERS_API_URL
const signinUserUrl = `${apiUrl}v1/authentication/signin`
const signupUserUrl = `${apiUrl}v1/authentication/signup`

export const refreshUserAccessToken = (): Promise<IAuthUser> => {
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

export const clearSession = (): void => {
  removeCookie(ACCESS_USER_TOKEN_KEY)
  removeCookie(REFRESH_TOKEN_KEY)
}

export const getLoggedInUser = (): Promise<IUser> => {
  return Api.get(getLoggedInUserUrl).then((response: AxiosResponse<IUser>) => {
    return response.data
  })
}

export const signInUser = async (username: string, password: string): Promise<void> => {
  const postData = {
    userName: username,
    password,
  }

  const response = await Api.post(signinUserUrl, postData, {
    headers: {
      'Content-type': headersContentTypeFormUrlencoded,
    },
  })

  const newAccessUserToken = response.data.access_token
  const newRefreshToken = response.data.refresh_token
  setCookie(ACCESS_USER_TOKEN_KEY, newAccessUserToken)
  setCookie(REFRESH_TOKEN_KEY, newRefreshToken)
}

export const signUpUser = async (
  username: string,
  password: string,
  email: string,
): Promise<IAuthUser> => {
  const postData = {
    userName: username,
    password,
    email,
    userType: Roles.CUSTOMER,
  }

  const response: AxiosResponse<IAuthUser> = await Api.post(signupUserUrl, postData, {
    headers: {
      'Content-type': headersContentTypeFormUrlencoded,
    },
  })

  const newAccessUserToken = response.data.access_token
  const newRefreshToken = response.data.refresh_token
  setCookie(ACCESS_USER_TOKEN_KEY, newAccessUserToken)
  setCookie(REFRESH_TOKEN_KEY, newRefreshToken)

  return response.data
}
