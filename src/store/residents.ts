import store from 'zustand'
import * as services from './services'

type ResidentsStore = {
  addOne: (data: any) => void
  addMany: (data: any) => void
  activate: (id: string, cb: Function) => void
}

export const useResidents = store<ResidentsStore>((set, get) => ({
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
  activate: async (id, cb) => {
    try {
      const response = await services.activateUser(id)
      cb(response)
    } catch {}
  },
}))
