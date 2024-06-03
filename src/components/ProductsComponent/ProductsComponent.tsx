import { Pagination } from '@mui/material'
import Product from 'components/Product/Product'
import { IUser, Product as ProductModel, initialUser } from 'models'
import { ChangeEvent, useEffect, useState } from 'react'
import { getLoggedInUser } from 'services/Auth'
import { getProducts } from 'services/Product'

const ProductsComponent = () => {
  const [products, setProducts] = useState<ProductModel[]>([])
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
    getProducts(1, 10).then((response) => {
      setProducts(response.items)
      setPage(response.currentPage)
      setTotalPages(response.totalPages)
      setTotalCount(response.totalCount)
    })
  }, [])

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    getProducts(value, 10)
      .then((response) => {
        setProducts(response.items)
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
      {products.map((product) => (
        <Product key={product.id} />
      ))}
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

export default ProductsComponent
