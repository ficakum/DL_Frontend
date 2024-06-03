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
  id: string
  userType: Role
}

export const initialUser = {
  email: '',
  userName: '',
  id: '',
  userType: Roles.CUSTOMER,
}

export interface Product {
  type: string
  imageURL: string
  code: string
  price: number
  currency: string
}

export const initialProduct = {
  type: '',
  imageURL: '',
  code: '',
  price: 0,
  currency: '',
}

export interface Order {
  products: string[]
  status: string
  owner: string
  orderPrice: number
}

export const initialOrder = {
  products: [],
  status: '',
  owner: '',
  orderPrice: 0,
}

export interface IProps {
  children: ReactNode
}
