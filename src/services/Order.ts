import { Api } from 'api'
import { AxiosResponse } from 'axios'
import {
  CREATE_ORDER_URL,
  DELETE_ORDER_URL,
  GET_ORDERS_URL,
  GET_ORDER_URL,
  UPDATE_ORDER_URL,
} from 'constants/order'
import { ItemsPage, Order } from 'models'

const apiUrl = process.env.REACT_APP_API_URL

const getOrderRecommendationUrl = `${apiUrl}${GET_ORDER_URL}`
const getOrdersRecommendationUrl = `${apiUrl}${GET_ORDERS_URL}`
const createOrderRecommendationUrl = `${apiUrl}${CREATE_ORDER_URL}`
const updateOrderRecommendationUrl = `${apiUrl}${UPDATE_ORDER_URL}`
const deleteOrderRecommendationUrl = `${apiUrl}${DELETE_ORDER_URL}`

export const getOrder = (id: string) => {
  return Api.get(`${getOrderRecommendationUrl}${id}`).then(
    (response: AxiosResponse<Order>) => response.data,
  )
}

export const getOrders = (page?: number, limit?: number, owner?: string) => {
  let ownerQuery
  let pageQuery
  let limitQuery
  owner ? (ownerQuery = `&owner=${owner}`) : (ownerQuery = '')
  page ? (pageQuery = `?$page=${page}`) : (pageQuery = '?page=1')
  limit ? (limitQuery = `&$limit=${limit}`) : (limitQuery = '&limit=0')

  return Api.get(`${getOrdersRecommendationUrl}${pageQuery}${limitQuery}${ownerQuery}`).then(
    (response: AxiosResponse<ItemsPage<Order>>) => response.data,
  )
}

export const createOrder = (order: Partial<Order>) => {
  return Api.post(`${createOrderRecommendationUrl}`, order).then(
    (response: AxiosResponse<Order>) => response.data,
  )
}

export const updateOrder = (order: Partial<Order>, id: string) => {
  return Api.patch(`${updateOrderRecommendationUrl}${id}`, order).then(
    (response: AxiosResponse<Order>) => response.data,
  )
}

export const deleteOrder = (id: string) => {
  Api.delete(`${deleteOrderRecommendationUrl}${id}`)
}
