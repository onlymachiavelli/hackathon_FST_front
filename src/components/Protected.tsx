import { useUser } from '../store'
import { Navigate } from 'react-router-dom'

const Protected = ({
  role,
  children,
}: {
  role: string
  children: JSX.Element | JSX.Element[]
}) => {
  const store = useUser()

  console.log(
    {
      store,
      x: store.user?.role !== role,
    },
    store.isAuthenticated === null,
    store.loading
  )

  if (store.loading || store.isAuthenticated === null)
    return <div>Loading...</div>

  if (store.isAuthenticated === null || store.user.role !== role)
    return <Navigate to="/signin" />

  return <>{children}</>
}

export default Protected
