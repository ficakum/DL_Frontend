import { Api } from 'api'
import { AxiosResponse } from 'axios'
import {
  CREATE_PRODUCTS_URL,
  DELETE_PRODUCTS_URL,
  GET_PRODUCTS_URL,
  UPDATE_PRODUCTS_URL,
} from 'constants/product'
import { ItemsPage, Product } from 'models'

const apiUrl = process.env.REACT_APP_API_URL

const getProductRecommendationUrl = `${apiUrl}${GET_PRODUCTS_URL}`
const getProductsRecommendationUrl = `${apiUrl}${GET_PRODUCTS_URL}`
const createProductRecommendationUrl = `${apiUrl}${CREATE_PRODUCTS_URL}`
const updateProductRecommendationUrl = `${apiUrl}${UPDATE_PRODUCTS_URL}`
const deleteProductRecommendationUrl = `${apiUrl}${DELETE_PRODUCTS_URL}`

export const getProduct = (id: string) => {
  return Api.get(`${getProductRecommendationUrl}${id}`).then(
    (response: AxiosResponse<Product>) => response.data,
  )
}

export const getProducts = (page?: number, limit?: number, type?: string) => {
  let typeQuery
  let pageQuery
  let limitQuery
  type ? (typeQuery = `&type=${type}`) : (typeQuery = '')
  page ? (pageQuery = `?$page=${page}`) : (pageQuery = '?page=1')
  limit ? (limitQuery = `&$limit=${limit}`) : (limitQuery = '&limit=0')

  return Api.get(`${getProductsRecommendationUrl}${pageQuery}${limitQuery}${typeQuery}`).then(
    (response: AxiosResponse<ItemsPage<Product>>) => response.data,
  )
}

export const createProduct = (product: Partial<Product>) => {
  return Api.post(`${createProductRecommendationUrl}`, product).then(
    (response: AxiosResponse<Product>) => response.data,
  )
}

export const updateProduct = (product: Partial<Product>, id: string) => {
  return Api.patch(`${updateProductRecommendationUrl}${id}`, product).then(
    (response: AxiosResponse<Product>) => response.data,
  )
}

export const deleteProduct = async (id: string) => {
  Api.delete(`${deleteProductRecommendationUrl}${id}`)
}
