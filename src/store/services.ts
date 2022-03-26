import axios from './axios'

export const login = async (email: string, password: string) => {
  const { data } = await axios.post('/login', { email, password })
  return data
}
