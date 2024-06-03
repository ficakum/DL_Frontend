import { Api } from 'api'
import { PAY_ORDER_URL } from 'constants/payment'

const apiUrl = process.env.REACT_APP_API_URL

const payOrderUrl = `${apiUrl}${PAY_ORDER_URL}`

export const payOrder = async (orderId: string) => {
  const response = await Api.patch(`${payOrderUrl}${orderId}`)

  return response.data
}
