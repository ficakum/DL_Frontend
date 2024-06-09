import { IUser, Order as OrderModel, Product, Roles } from '../../models'
import { FC, useEffect, useState } from 'react'
import { getProductsByIds } from '../../services/Product'

import './Order.scss'

interface IOrderProps {
  order: OrderModel
  user: IUser
}

const Order: FC<IOrderProps> = ({ order, user }) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const productIds = order.products.map((product) => product.productId)
    getProductsByIds(productIds).then((products) => setProducts(products))
  }, [])

  return (
    <div className='order'>
      <div className='order-content'>
        <p>Order price:</p>
        <p>
          <strong>{order.orderPrice}</strong>
        </p>
      </div>
      <div className='order-content'>
        <p>Order status:</p>
        <p>
          <strong>{order.status}</strong>
        </p>
      </div>
      {user.userType === Roles.ADMIN && (
        <div className='order-content'>
          <p>Owner</p>
          <p>
            <strong>{user.userName}</strong>
          </p>
        </div>
      )}
      <div className='order-content'>
        <p>Products:</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {products.map((product, productIndex) => (
          <div className='order-item' key={product._id}>
            <div className='order-item-content'>
              <p>Product type:</p>
              <p>
                <strong>{product.type}</strong>
              </p>
            </div>
            <div className='order-item-content'>
              <p>Product name:</p>
              <p>
                <strong>{product.name}</strong>
              </p>
            </div>
            <div className='order-item-content'>
              <p>Price of product:</p>
              <p>
                <strong>{product.price}</strong>
              </p>
            </div>
            <div className='order-item-content'>
              <p>Number of products ordered:</p>
              <p>
                <strong>{order.products[productIndex].numberOfProducts}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
