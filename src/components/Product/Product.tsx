import { Button } from '@mui/material'
import { Product as ProductModel } from 'models'
import { FC } from 'react'

interface IProductProps {
  product: ProductModel
  handleProductOrder: (product: ProductModel) => void
}

const Product: FC<IProductProps> = ({ product, handleProductOrder }) => {
  const handleOrderProductClick = () => {
    handleProductOrder(product)
  }

  return (
    <div>
      <div>
        <p>{product.type}</p>
      </div>
      <Button onClick={handleOrderProductClick}>Order product</Button>
    </div>
  )
}

export default Product
