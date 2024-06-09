import { Button, TextField } from '@mui/material'
import { Product as ProductModel } from '../../models'
import { FC, useRef } from 'react'
import './Product.scss'

interface IProductProps {
  product: ProductModel
  handleProductOrder: (product: ProductModel, numberOfProducts: number) => void
}

const Product: FC<IProductProps> = ({ product, handleProductOrder }) => {
  const inputRef = useRef<HTMLInputElement>()

  const handleOrderProductClick = () => {
    let numberOfProducts = 1
    if (inputRef.current) {
      console.log(inputRef.current)
      numberOfProducts = Number(inputRef.current.value)
    }
    console.log(numberOfProducts)

    handleProductOrder(product, numberOfProducts)
  }

  return (
    <div className='product'>
      <div className='product-content'>
        <div className='product-content-image'>
          <iframe
            src={product.imageURL}
            width='200'
            height='200'
            frameBorder='0'
            scrolling='no'
            allowFullScreen
            title='Bycicle 1'
          ></iframe>
        </div>
        <div className='product-content-info'>
          <p>Type of product:</p>
          <p className='product-content-info-dynamic'>{product.type}</p>
        </div>
        <div className='product-content-info'>
          <p>Name of product:</p>
          <p className='product-content-info-dynamic'>{product.name}</p>
        </div>
        <div className='product-content-info'>
          <p>Price of product:</p>
          <p className='product-content-info-dynamic'>{product.price}</p>
        </div>
        <div className='product-content-info'>
          <p>Code of product:</p>
          <p className='product-content-info-dynamic'>{product.code}</p>
        </div>
      </div>
      <div className='product-order'>
        <TextField inputRef={inputRef} type='number' />
        <Button onClick={handleOrderProductClick}>Add product to order</Button>
      </div>
    </div>
  )
}

export default Product
