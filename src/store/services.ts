import axios from './axios'

export const login = async (email: string, password: string) => {
  const { data } = await axios.post('/auth/login', { email, password })
  return data
}

export const register = async (data: any) => {
  const { data: user } = await axios.post('/auth/register', data)
  return user
}

export const getMe = async () => {
  const { data } = await axios.get('/users/getme')
  return data
}

export const addLand = async (data: any) => axios.post('/lands', data)

export const getMyLands = async () => {
  const { data } = await axios.get('/lands/my')
  return data
}

export const getAllLands = async () => {
  const { data } = await axios.get('/lands/all')
  return data
}
