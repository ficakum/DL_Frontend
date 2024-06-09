import { Product as ProductModel } from '../../models'
import { FC } from 'react'

import './CreateOrder.scss'

interface ICreateOrderProps {
  orderedProducts: { product: ProductModel; numberOfProducts: number }[]
  totalPrice: number
}

const CreateOrder: FC<ICreateOrderProps> = ({ orderedProducts, totalPrice }) => {
  return (
    <div>
      <p>
        Total price of order: <strong>{totalPrice}</strong>
      </p>
      <div className='create-order'>
        {orderedProducts.map((orderedProduct) => {
          return (
            <div className='create-order-item' key={`ordered-${orderedProduct.product._id}`}>
              <div className='create-order-item-content'>
                <p>Type of product ordered:</p>
                <p>
                  <strong>{orderedProduct.product.type}</strong>
                </p>
              </div>
              <div className='create-order-item-content'>
                <p>Name of product ordered:</p>
                <p>
                  <strong>{orderedProduct.product.name}</strong>
                </p>
              </div>
              <div className='create-order-item-content'>
                <p>Price of product ordered:</p>
                <p>
                  <strong>{orderedProduct.product.price}</strong>
                </p>
              </div>
              <div className='create-order-item-content'>
                <p>Amount of product ordered:</p>
                <p>
                  <strong>{orderedProduct.numberOfProducts}</strong>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreateOrder
