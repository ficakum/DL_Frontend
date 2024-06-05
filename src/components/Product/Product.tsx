import { Button, Input } from '@mui/material'
import { Product as ProductModel } from '../../models'
import { FC, useRef } from 'react'

interface IProductProps {
  product: ProductModel
  handleProductOrder: (product: ProductModel, numberOfProducts: number) => void
}

const Product: FC<IProductProps> = ({ product, handleProductOrder }) => {
  const inputRef = useRef<HTMLInputElement>()

  const handleOrderProductClick = () => {
    let numberOfProducts = 1
    if (inputRef.current) {
      numberOfProducts = Number(inputRef.current.value)
    }

    handleProductOrder(product, numberOfProducts)
  }

  return (
    <div>
      <div>
        <div>
          <h2>Type of product:</h2>
          <p>{product.type}</p>
        </div>
        <div>
          <h2>Name of product:</h2>
          <p>{product.name}</p>
        </div>
        <div>
          <h2>Price of product:</h2>
          <p>{product.price}</p>
        </div>
        <div>
          <h2>Code of product:</h2>
          <p>{product.code}</p>
        </div>
        <div>
          <img src={product.imageURL} />
        </div>
      </div>
      <Input ref={inputRef} type='number' />
      <Button onClick={handleOrderProductClick}>Add product to order</Button>
    </div>
  )
}

export default Product
