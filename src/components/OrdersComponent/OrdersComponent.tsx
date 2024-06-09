import { Button, Pagination } from '@mui/material'
import Order from '../../components/Order/Order'
import { IUser, Order as OrderModel, Roles, initialUser } from '../../models'
import { ChangeEvent, useEffect, useState } from 'react'
import { getLoggedInUser } from '../../services/Auth'
import { getOrders } from '../../services/Order'

import './OrdersComponent.scss'
import { payOrder } from '../../services/Payment'

const OrdersComponent = () => {
  const [orders, setOrders] = useState<OrderModel[]>([])
  const [page, setPage] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalCount, setTotalCount] = useState<number>(0)
  const [user, setUser] = useState<IUser>(initialUser)

  useEffect(() => {
    getLoggedInUser().then((user) => setUser(user))
    user.userType === Roles.ADMIN
      ? getOrders(1, 10).then((response) => {
          setOrders(response.items)
          setPage(response.currentPage)
          setTotalPages(response.totalPages)
          setTotalCount(response.totalCount)
        })
      : getOrders(1, 10, user._id).then((response) => {
          setOrders(response.items)
          setPage(response.currentPage)
          setTotalPages(response.totalPages)
          setTotalCount(response.totalCount)
        })
  }, [])

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    user.userType === Roles.ADMIN
      ? getOrders(value, 10)
          .then((response) => {
            setOrders(response.items)
            setPage(response.currentPage)
            setTotalPages(response.totalPages)
            setTotalCount(response.totalCount)
          })
          .catch((error: unknown) => {
            console.log(error)
          })
      : getOrders(value, 10, user._id)
          .then((response) => {
            setOrders(response.items)
            setPage(response.currentPage)
            setTotalPages(response.totalPages)
            setTotalCount(response.totalCount)
          })
          .catch((error: unknown) => {
            console.log(error)
          })
  }

  const payOrderWithId = (orderId: string) => {
    payOrder(orderId).then((order) => {
      const newOrders = orders.filter((ord) => ord._id !== order._id)
      setOrders(newOrders)
    })
  }

  return (
    <div className='orders'>
      <div>
        {orders.map((order, index) => (
          <>
            {user.userType === Roles.ADMIN && (
              <Button onClick={() => payOrderWithId(order._id)}>Pay order</Button>
            )}
            <p>
              Order: <strong>{index + 1}</strong>
            </p>
            <Order key={order._id} order={order} user={user} />
          </>
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color='primary'
        size='large'
      />
    </div>
  )
}

export default OrdersComponent
