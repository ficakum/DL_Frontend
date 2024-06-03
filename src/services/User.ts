import { Api } from 'api'
import {
  CREATE_USER_URL,
  DELETE_USER_URL,
  GET_USERS_URL,
  GET_USER_URL,
  UPDATE_USER_URL,
} from 'constants/user'
import { IUser } from 'models'

const apiUrl = process.env.REACT_APP_API_URL

const getUserURL = `${apiUrl}${GET_USER_URL}`
const getUsersURL = `${apiUrl}${GET_USERS_URL}`
const createUserURL = `${apiUrl}${CREATE_USER_URL}`
const updateUserURL = `${apiUrl}${UPDATE_USER_URL}`
const deleteUserURL = `${apiUrl}${DELETE_USER_URL}`

export const getUser = async (id: string) => {
  const response = await Api.get(`${getUserURL}${id}`)
  return response.data
}

export const getUsers = async (page?: number, limit?: number) => {
  let pageQuery
  let limitQuery
  page ? (pageQuery = `?$page=${page}`) : (pageQuery = '?page=1')
  limit ? (limitQuery = `&$limit=${limit}`) : (limitQuery = '&limit=0')

  const response = await Api.get(`${getUsersURL}${pageQuery}${limitQuery}`)

  return response.data
}

export const createUser = async (user: Partial<IUser>) => {
  const response = await Api.post(`${createUserURL}`, user)
  return response.data
}

export const updateUser = async (user: Partial<IUser>, id: string) => {
  const response = await Api.patch(`${updateUserURL}${id}`, user)
  return response.data
}

export const deleteUser = async (id: string) => {
  const response = await Api.delete(`${deleteUserURL}${id}`)
  return response.data
}
