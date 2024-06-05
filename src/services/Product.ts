import { Api } from '../api'
import { AxiosResponse } from 'axios'
import {
  CREATE_PRODUCTS_URL,
  DELETE_PRODUCTS_URL,
  GET_PRODUCTS_BY_IDS_URL,
  GET_PRODUCTS_URL,
  UPDATE_PRODUCTS_URL,
} from '../constants/product'
import { ItemsPage, Product } from '../models'

const apiUrl = process.env.REACT_APP_API_URL

const getProductUrl = `${apiUrl}${GET_PRODUCTS_URL}`
const getProductsUrl = `${apiUrl}${GET_PRODUCTS_URL}`
const getProductsByIdsUrl = `${apiUrl}${GET_PRODUCTS_BY_IDS_URL}`
const createProductUrl = `${apiUrl}${CREATE_PRODUCTS_URL}`
const updateProductUrl = `${apiUrl}${UPDATE_PRODUCTS_URL}`
const deleteProductUrl = `${apiUrl}${DELETE_PRODUCTS_URL}`
const getSimilarImageProductsUrl = `${apiUrl}${GET_PRODUCTS_URL}`

export const getProduct = (id: string): Promise<Product> => {
  return Api.get(`${getProductUrl}${id}`).then((response: AxiosResponse<Product>) => response.data)
}

export const getProducts = (
  page?: number,
  limit?: number,
  name?: string,
  type?: string,
): Promise<ItemsPage<Product>> => {
  let typeQuery
  let nameQuery
  let pageQuery
  let limitQuery
  type ? (typeQuery = `&type=${type}`) : (typeQuery = '')
  name ? (nameQuery = `&name=${name}`) : (nameQuery = '')
  page ? (pageQuery = `?$page=${page}`) : (pageQuery = '?page=1')
  limit ? (limitQuery = `&$limit=${limit}`) : (limitQuery = '&limit=0')

  return Api.get(`${getProductsUrl}${pageQuery}${limitQuery}${typeQuery}${nameQuery}`).then(
    (response: AxiosResponse<ItemsPage<Product>>) => response.data,
  )
}

export const getProductsByIds = (ids: string[]): Promise<Product[]> => {
  return Api.post(`${getProductsByIdsUrl}`, { ids }).then(
    (response: AxiosResponse<Product[]>) => response.data,
  )
}

export const createProduct = (product: Partial<Product>): Promise<Product> => {
  return Api.post(`${createProductUrl}`, product).then(
    (response: AxiosResponse<Product>) => response.data,
  )
}

export const updateProduct = (product: Partial<Product>, id: string): Promise<Product> => {
  return Api.patch(`${updateProductUrl}${id}`, product).then(
    (response: AxiosResponse<Product>) => response.data,
  )
}

export const deleteProduct = (id: string): void => {
  Api.delete(`${deleteProductUrl}${id}`)
}

export const getSimilarProductsByImage = (formData: FormData): Promise<Product[]> => {
  return Api.post(`${getSimilarImageProductsUrl}}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response: AxiosResponse<Product[]>) => response.data)
}
