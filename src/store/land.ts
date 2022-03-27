import store from 'zustand'
import * as services from './services'

type LandStore = {
  add: (latitude: number, longitude: number) => void
  mine: any[]
  all: any[]
  launchGetMine: () => void
  launchGetAll: () => void
}

export const useLand = store<LandStore>((set, get) => ({
  mine: [],
  all: [],
  add: async (latitude, longitude) => {
    await services.addLand({ latitude, longitude })
    set({
      mine: [...get().mine, { latitude, longitude }],
    })
  },
  launchGetMine: async () => {
    try {
      const data = await services.getMyLands()
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
      const data = await services.getAllLands()
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
