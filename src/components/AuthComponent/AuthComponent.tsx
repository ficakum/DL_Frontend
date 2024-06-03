import { Button } from '@mui/material'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import { useState } from 'react'

const AuthComponent = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true)

  return (
    <>
      {hasAccount ? <SignIn /> : <SignUp />}
      <Button
        onClick={() => {
          setHasAccount(!hasAccount)
        }}
      >
        {hasAccount ? "Don't have an account? Sign up" : 'Have account? Sign in'}
      </Button>
    </>
  )
}

export default AuthComponent
