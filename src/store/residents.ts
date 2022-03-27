import store from 'zustand'
import * as services from './services'

type ResidentsStore = {}

export const useResidents = store<ResidentsStore>((set, get) => ({}))
