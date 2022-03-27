import store from 'zustand'
import * as services from './services'

type TransactionsStore = {
  create: (id: string) => void
  resident: any[]
  lands: any[]
  users: any[]
  launchGetResidentsTransaction: () => void
  launchGetLandTransaction: () => void
  launchGetUsersThatHasntPaidYet: () => void
  warnUser: (id: string) => void
}

export const useTransaction = store<TransactionsStore>((set, get) => ({
  resident: [],
  lands: [],
  users: [],
  create: async id => {
    try {
      await services.createTransaction(id)
    } catch {}
  },
  launchGetResidentsTransaction: async () => {
    try {
      const data = await services.getTransactionsForResident()
      set({
        resident: data,
      })
    } catch {}
  },
  launchGetUsersThatHasntPaidYet: async () => {
    try {
      const data = await services.getUsersThatHasntPaidYet()
      set({
        users: data,
      })
    } catch {}
  },
  launchGetLandTransaction: async () => {
    try {
      const data = await services.getTransactionsForLand()
      set({
        lands: data,
      })
    } catch {}
  },
  warnUser: async (id: string) => {
    try {
      const data = await services.warnUser(id)
    } catch {}
  },
}))
