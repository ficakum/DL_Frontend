import { Api } from 'api'
import {
  CREATE_ORDER_URL,
  DELETE_ORDER_URL,
  GET_ORDERS_URL,
  GET_ORDER_URL,
  UPDATE_ORDER_URL,
} from 'constants/order'
import { Order } from 'models'

const apiUrl = process.env.REACT_APP_API_URL

const getOrderRecommendationUrl = `${apiUrl}${GET_ORDER_URL}`
const getOrdersRecommendationUrl = `${apiUrl}${GET_ORDERS_URL}`
const createOrderRecommendationUrl = `${apiUrl}${CREATE_ORDER_URL}`
const updateOrderRecommendationUrl = `${apiUrl}${UPDATE_ORDER_URL}`
const deleteOrderRecommendationUrl = `${apiUrl}${DELETE_ORDER_URL}`

export const getOrder = async (id: string) => {
  const response = await Api.get(`${getOrderRecommendationUrl}${id}`)
  return response.data
}

export const getOrders = async (page?: number, limit?: number, owner?: string) => {
  let ownerQuery
  let pageQuery
  let limitQuery
  owner ? (ownerQuery = `&owner=${owner}`) : (ownerQuery = '')
  page ? (pageQuery = `?$page=${page}`) : (pageQuery = '?page=1')
  limit ? (limitQuery = `&$limit=${limit}`) : (limitQuery = '&limit=0')

  const response = await Api.get(
    `${getOrdersRecommendationUrl}${pageQuery}${limitQuery}${ownerQuery}`,
  )

  return response.data
}

export const createOrder = async (order: Partial<Order>) => {
  const response = await Api.post(`${createOrderRecommendationUrl}`, order)
  return response.data
}

export const updateOrder = async (order: Partial<Order>, id: string) => {
  const response = await Api.patch(`${updateOrderRecommendationUrl}${id}`, order)
  return response.data
}

export const deleteOrder = async (id: string) => {
  const response = await Api.delete(`${deleteOrderRecommendationUrl}${id}`)
  return response.data
}
