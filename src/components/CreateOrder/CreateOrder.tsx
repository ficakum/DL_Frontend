import { Product as ProductModel } from 'models'
import { FC } from 'react'

interface ICreateOrderProps {
  orderedProducts: { product: ProductModel; numberOfProducts: number }[]
}

const CreateOrder: FC<ICreateOrderProps> = ({ orderedProducts }) => {
  return (
    <>
      {orderedProducts.map((orderedProduct) => {
        return (
          <div key={`ordered-${orderedProduct.product.id}`}>
            <div>
              <h2>Type of product ordered:</h2>
              <p>{orderedProduct.product.type}</p>
            </div>
            <div>
              <h2>Name of product ordered:</h2>
              <p>{orderedProduct.product.name}</p>
            </div>
            <div>
              <h2>Price of product ordered:</h2>
              <p>{orderedProduct.product.price}</p>
            </div>
            <div>
              <h2>Amount of product ordered:</h2>
              <p>{orderedProduct.numberOfProducts}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CreateOrder
