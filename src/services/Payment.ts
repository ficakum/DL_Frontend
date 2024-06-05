import { Api } from '../api'
import { AxiosResponse } from 'axios'
import { PAY_ORDER_URL } from '../constants/payment'
import { Order } from '../models'

const apiUrl = process.env.REACT_APP_API_URL

const payOrderUrl = `${apiUrl}${PAY_ORDER_URL}`

export const payOrder = (orderId: string): Promise<Order> => {
  return Api.patch(`${payOrderUrl}${orderId}`).then(
    (response: AxiosResponse<Order>) => response.data,
  )
}
