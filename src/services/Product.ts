import { Api } from 'api'
import {
  CREATE_PRODUCTS_URL,
  DELETE_PRODUCTS_URL,
  GET_PRODUCTS_URL,
  UPDATE_PRODUCTS_URL,
} from 'constants/product'
import { Product } from 'models'

const apiUrl = process.env.REACT_APP_API_URL

const getProductRecommendationUrl = `${apiUrl}${GET_PRODUCTS_URL}`
const getProductsRecommendationUrl = `${apiUrl}${GET_PRODUCTS_URL}`
const createProductRecommendationUrl = `${apiUrl}${CREATE_PRODUCTS_URL}`
const updateProductRecommendationUrl = `${apiUrl}${UPDATE_PRODUCTS_URL}`
const deleteProductRecommendationUrl = `${apiUrl}${DELETE_PRODUCTS_URL}`

export const getProduct = async (id: string) => {
  const response = await Api.get(`${getProductRecommendationUrl}${id}`)
  return response.data
}

export const getProducts = async (page?: number, limit?: number, type?: string) => {
  let typeQuery
  let pageQuery
  let limitQuery
  type ? (typeQuery = `&type=${type}`) : (typeQuery = '')
  page ? (pageQuery = `?$page=${page}`) : (pageQuery = '?page=1')
  limit ? (limitQuery = `&$limit=${limit}`) : (limitQuery = '&limit=0')

  const response = await Api.get(
    `${getProductsRecommendationUrl}${pageQuery}${limitQuery}${typeQuery}`,
  )

  return response.data
}

export const createProduct = async (product: Partial<Product>) => {
  const response = await Api.post(`${createProductRecommendationUrl}`, product)
  return response.data
}

export const updateProduct = async (product: Partial<Product>, id: string) => {
  const response = await Api.patch(`${updateProductRecommendationUrl}${id}`, product)
  return response.data
}

export const deleteProduct = async (id: string) => {
  const response = await Api.delete(`${deleteProductRecommendationUrl}${id}`)
  return response.data
}
