import { Api } from '../api'
import { AxiosResponse } from 'axios'
import {
  CREATE_USER_URL,
  DELETE_USER_URL,
  GET_USERS_URL,
  GET_USER_URL,
  UPDATE_USER_URL,
} from '../constants/user'
import { IUser, ItemsPage } from '../models'

const apiUrl = process.env.REACT_APP_API_URL

const getUserURL = `${apiUrl}${GET_USER_URL}`
const getUsersURL = `${apiUrl}${GET_USERS_URL}`
const createUserURL = `${apiUrl}${CREATE_USER_URL}`
const updateUserURL = `${apiUrl}${UPDATE_USER_URL}`
const deleteUserURL = `${apiUrl}${DELETE_USER_URL}`

export const getUser = async (id: string) => {
  return Api.get(`${getUserURL}${id}`).then((response: AxiosResponse<IUser>) => response.data)
}

export const getUsers = async (page?: number, limit?: number) => {
  let pageQuery
  let limitQuery
  page ? (pageQuery = `?$page=${page}`) : (pageQuery = '?page=1')
  limit ? (limitQuery = `&$limit=${limit}`) : (limitQuery = '&limit=0')

  return await Api.get(`${getUsersURL}${pageQuery}${limitQuery}`).then(
    (response: AxiosResponse<ItemsPage<IUser>>) => response.data,
  )
}

export const createUser = async (user: Partial<IUser>) => {
  return await Api.post(`${createUserURL}`, user).then(
    (response: AxiosResponse<IUser>) => response.data,
  )
}

export const updateUser = async (user: Partial<IUser>, id: string) => {
  return Api.patch(`${updateUserURL}${id}`, user).then(
    (response: AxiosResponse<IUser>) => response.data,
  )
}

export const deleteUser = async (id: string) => {
  return Api.delete(`${deleteUserURL}${id}`).then((response: AxiosResponse<IUser>) => response.data)
}
