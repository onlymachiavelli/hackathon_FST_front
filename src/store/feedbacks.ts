import store from 'zustand'
import * as services from './services'

type FeedbackStore = {
  add: (data: any) => void
  all: any[]
  launchGetMine: () => void
}

export const useFeedback = store<FeedbackStore>((set, get) => ({
  add: async data => {
    await services.addFeedback(data)
  },
  all: [],
  launchGetMine: async () => {
    try {
      const data = await services.getFeedbacks()
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
