import store from 'zustand'
import * as services from './services'

type ResidentsStore = {
  all: any[]
  mods: any[]
  addOne: (data: any) => void
  addMany: (data: any) => void
  activate: (id: string) => any
  launchGetAll: () => void
  launchGetMods: () => void
}

export const useResidents = store<ResidentsStore>((set, get) => ({
  all: [],
  mods: [],
  addOne: async data => {
    try {
      await services.addUser(data)
    } catch {}
  },
  addMany: async data => {
    try {
      await services.addUsers(data)
    } catch {}
  },
  activate: async id => {
    try {
      const response = await services.activateUser(id)
      return response
    } catch {}
  },
  launchGetAll: async () => {
    try {
      const data = await services.getAllUsers()
      set({
        all: data,
      })
    } catch {}
  },
  launchGetMods: async () => {
    try {
      const data = await services.getAllModerators()
      set({
        mods: data,
      })
    } catch {}
  },
}))
