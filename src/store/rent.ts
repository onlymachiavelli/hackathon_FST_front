import store from 'zustand'
import * as services from './services'

type RentStore = {
  add: (data: any) => void
  mine: any[]
  all: any[]
  launchGetMine: () => void
  launchGetAll: () => void
}

export const useRent = store<RentStore>((set, get) => ({
  add: async data => {
    await services.addRent(data)
  },
  mine: [],
  all: [],
  launchGetMine: async () => {
    try {
      const data = await services.getMyRents()
      set({
        mine: data,
      })
    } catch {
      set({
        mine: [],
      })
    }
  },

  launchGetAll: async () => {
    try {
      const data = await services.getAllRents()
      set({
        all: data,
      })
    } catch {
      set({
        all: [],
      })
    }
  },
}))
