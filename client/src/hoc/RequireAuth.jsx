import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function RequireAuth({ children }) {
  const auth = useAuth()
  console.log(auth)

  if (!auth.isAuth) {
    return <Navigate to={"/login"} />
  }
  return children
}

export default RequireAuth
