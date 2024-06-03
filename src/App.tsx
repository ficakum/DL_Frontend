import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'
import Auth from 'pages/Auth'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={ROUTES.AUTH.PATH} element={<Auth />}></Route>

          {/* wild route*/}
          <Route path='*' element={<Navigate to={ROUTES.AUTH.PATH} replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
