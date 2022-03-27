import store from 'zustand'
import * as services from './services'

type RequestStore = {
  mine: any[]
  request: (land: string) => void
  reject: (id: string) => void
  accept: (id: string) => void
  launchGetMine: () => void
}

export const useRequests = store<RequestStore>((set, get) => ({
  mine: [],
  request: async (land: string) => {
    try {
      await services.requestModeration(land)
    } catch {}
  },
  reject: async (land: string) => {
    try {
      await services.rejectRequest(land)
      set({
        mine: get().mine.filter(request => request.land.id !== land),
      })
    } catch {}
  },
  accept: async (land: string) => {
    try {
      await services.acceptRequest(land)
      set({
        mine: get().mine.filter(request => request.land !== land),
      })
    } catch {}
  },
  launchGetMine: async () => {
    try {
      const data = await services.getRequests()
      set({
        mine: data,
      })
    } catch {}
  },
}))
