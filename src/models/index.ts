import { ReactNode, createContext } from 'react'

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
  firstName: string
  id: string
  lastName: string
  phoneNumber: string
  photoUrl: string
}

export const initialUser = {
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  phoneNumber: '',
  photoUrl: '',
}

export interface IProps {
  children: ReactNode
}
