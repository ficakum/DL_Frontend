import { IUser, Order as OrderModel, Product, Roles } from '../../models'
import { FC, useEffect, useState } from 'react'
import { getProductsByIds } from '../../services/Product'

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
    <>
      <div>
        <h1>Order price:</h1>
        <p>{order.orderPrice}</p>
      </div>
      <div>
        <h1>Order status:</h1>
        <p>{order.status}</p>
      </div>
      {user.userType === Roles.ADMIN && (
        <div>
          <h1>Owner</h1>
          <p>{user.userName}</p>
        </div>
      )}
      {products.map((product, productIndex) => (
        <div key={product.id}>
          <div>
            <h1>Product type</h1>
            <p>{product.type}</p>
          </div>
          <div>
            <h1>Product name</h1>
            <p>{product.name}</p>
          </div>
          <div>
            <h2>Price of product:</h2>
            <p>{product.price}</p>
          </div>
          <div>
            <h2>Number of products ordered:</h2>
            <p>{order.products[productIndex].numberOfProducts}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Order
