import { getFromStorage } from "../../utils/localStorage"

function useAuth() {
  let user = getFromStorage("user")
  return {
    isAuth: !!user.email,
    email: user.email,
    id: user.id,
    token: user.token,
  }
}

export default useAuth
