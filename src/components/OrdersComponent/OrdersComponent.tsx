import { Pagination } from '@mui/material'
import Order from 'components/Order/Order'
import { IUser, Order as OrderModel, initialUser } from 'models'
import { ChangeEvent, useEffect, useState } from 'react'
import { getLoggedInUser } from 'services/Auth'
import { getOrders } from 'services/Order'

const OrdersComponent = () => {
  const [orders, setOrders] = useState<OrderModel[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState<number>(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPages, setTotalPages] = useState<number>(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalCount, setTotalCount] = useState<number>(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<IUser>(initialUser)

  useEffect(() => {
    getLoggedInUser().then((user) => setUser(user))
    getOrders(1, 10).then((response) => {
      setOrders(response.items)
      setPage(response.currentPage)
      setTotalPages(response.totalPages)
      setTotalCount(response.totalCount)
    })
  }, [])

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    getOrders(value, 10)
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

  return (
    <>
      <div>
        {orders.map((order) => (
          <Order key={order.id} />
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color='primary'
        size='large'
      />
    </>
  )
}

export default OrdersComponent
