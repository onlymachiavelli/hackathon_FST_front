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

export const requestModeration = async (land: string) => {
  const { data } = await axios.post('/requests', { land })
  return data
}

export const getRequests = async () => {
  const { data } = await axios.get('/requests/my')
  return data
}

export const acceptRequest = async (id: string) => {
  const { data } = await axios.post(`/requests/my/${id}/accept`)
  return data
}

export const rejectRequest = async (id: string) => {
  const { data } = await axios.post(`/requests/my/${id}/delete`)
  return data
}

export const addUser = async (body: any) => {
  const { data } = await axios.post(`/users/addone`, body)
  return data
}

export const addUsers = async (body: any) => {
  const { data } = await axios.post(`/users/addmany`, body)
  return data
}

export const activateUser = async (id: string) => {
  const { data } = await axios.post(`/users/activate/${id}`)
  return data
}

export const getAllUsers = async () => {
  const { data } = await axios.get(`/users/myresedences`)
  return data
}

export const getAllModerators = async () => {
  const { data } = await axios.get(`/users/mymods`)
  return data
}
export const getAllRents = async () => {
  const { data } = await axios.get(`/rents`)
  return data
}

export const getMyRents = async () => {
  const { data } = await axios.get(`/rents/my`)
  return data
}

export const addRent = async (body: string) => {
  const { data } = await axios.post(`/rents/`, body)
  return data
}
