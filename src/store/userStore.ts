import store from 'zustand'
import * as services from './services'

type UserStore = {
  user: any | null
  isAuthenticated: boolean
  login: {
    error: string | null
    loading: boolean
  }
  signup: {
    error: string | null
    loading: boolean
  }
  launchLogin: (username: string, password: string, cb: Function) => void
  launchSignup: (data: any, cb: Function) => void
  getMe: () => void
}

export const useUser = store<UserStore>(set => ({
  isAuthenticated: false,
  user: null,
  login: {
    error: null,
    loading: false,
  },
  signup: {
    error: null,
    loading: false,
  },
  loadToken: () => {
    set({
      isAuthenticated: !!localStorage.getItem('token'),
    })
  },
  launchSignup: async (data, cb) => {
    try {
      await set({
        signup: {
          error: null,
          loading: true,
        },
      })
      await services.register(data)

      await set({
        signup: {
          error: null,
          loading: false,
        },
      })
      cb()
    } catch {
      await set({
        signup: {
          error: 'Something went wrong',
          loading: false,
        },
      })
    }
  },
  launchLogin: async (username, password, cb) => {
    await set({
      login: {
        error: null,
        loading: true,
      },
    })

    try {
      const res = await services.login(username, password)

      if (res.token) {
        localStorage.setItem('token', res.token)
        set({
          isAuthenticated: true,
        })
        await set({
          login: {
            error: null,
            loading: false,
          },
        })
        cb()
      } else {
        set({
          login: {
            error: 'Username or password is incorrect',
            loading: false,
          },
        })
      }
    } catch {
      set({
        login: {
          error: 'Username or password is incorrect',
          loading: false,
        },
      })
    }
  },
  logout: () => {
    localStorage.removeItem('token')
  },
  getMe: async () => {
    try {
      const user = await services.getMe()
      if (!user) {
        set({
          isAuthenticated: false,
          user: null,
        })
      } else {
        set({
          isAuthenticated: true,
          user,
        })
      }
    } catch {
      set({
        isAuthenticated: false,
        user: null,
      })
    }
  },
}))
