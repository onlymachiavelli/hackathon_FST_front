import store from 'zustand'
import * as services from './services'

type UserStore = {
  user: any | null
  isAuthenticated: boolean
  login: {
    loading: boolean
  }
  signup: {
    loading: boolean
  }
}

const user = store<UserStore>((set, get) => ({
  isAuthenticated: false,
  user: null,
  login: {
    loading: false,
  },
  signup: {
    loading: false,
  },
  loadToken: () => {
    set({
      isAuthenticated: !!localStorage.getItem('token'),
    })
  },
  launchLogin: async (username: string, password: string) => {
    await services.login(username, password)
  },
  logout: () => {},
}))

export {}
