import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'
import Auth from 'pages/Auth'
import Payment from 'pages/Payment'
import Products from 'pages/Products'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={ROUTES.AUTH.PATH} element={<Auth />}></Route>

          <Route path={ROUTES.PAYMENT.PATH} element={<Payment />}></Route>

          <Route path={ROUTES.PRODUCT.PATH} element={<Products />}></Route>

          {/* wild route*/}
          <Route path='*' element={<Navigate to={ROUTES.AUTH.PATH} replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
