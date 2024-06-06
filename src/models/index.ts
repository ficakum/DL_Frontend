import { ReactNode, createContext } from 'react'

export enum Roles {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  VENDOR = 'vendor',
}

export type Role = 'admin' | 'customer' | 'vendor'

export const GlobalContext = createContext<GlobalContextType | null>(null)

export interface IAuthUser {
  access_token: string
  expires_in: number
  refresh_token: string
  token_type: string
}

export interface ResponseErrorData {
  error: string
  error_description: string
}

export type GlobalContextType = {
  updateUser: (state: IUser) => void
  user: IUser
}

export interface IUser {
  email: string
  userName: string
  _id: string
  userType: Role
}

export const initialUser = {
  email: '',
  userName: '',
  _id: '',
  userType: Roles.CUSTOMER,
}

export interface Product {
  _id: string
  type: string
  name: string
  imageURL: string
  code: string
  price: number
}

export const initialProduct = {
  _id: '',
  type: '',
  name: '',
  imageURL: '',
  code: '',
  price: 0,
}

interface OrderedProduct {
  productId: string
  numberOfProducts: number
}

export interface Order {
  _id: string
  products: OrderedProduct[]
  status: string
  owner: string
  orderPrice: number
}

export const initialOrder = {
  _id: '',
  products: [],
  status: '',
  owner: '',
  orderPrice: 0,
}

export interface IProps {
  children: ReactNode
}

export interface ItemsPage<T> {
  items: T[]
  currentPage: number
  totalPages: number
  totalCount: number
}
