import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/login'
import Home from './pages/Home'
import LandLoard from './pages/LLDashboard'
import LLLands from './pages/LLLands'
import LLModerators from './pages/LLModerators'
import LLRequests from './pages/LLRequests'
import MDDashboard from './pages/MDDashboard'
import MDFeedback from './pages/MDFeedback'
import MDRents from './pages/MDRents'
import MDTransactions from './pages/MDTransactions'
import MDUsers from './pages/MDUsers'
import MDPassDue from './pages/MDPassDue'
import UsersProfile from './pages/UsersProfile'
import { useUser } from './store'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import Protected from './components/Protected'
import AvailableLands from './pages/AvailableLands'
import AvailableRents from './pages/AvailableRents'
import ViewInMap from './pages/ViewInMap'
const App = () => {
  const store = useUser()

  useEffect(() => {
    store.getMe()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ll" element={<LandLoard />} />
        <Route path="/ll/properties" element={<LLLands />} />
        <Route path="/ll/moderators" element={<LLModerators />} />
        <Route path="/ll/requests" element={<LLRequests />} />

        <Route
          path="/md"
          element={
            // <Protected role="MODERATOR">
            <MDDashboard />
            /* </Protected> */
          }
        />
        <Route path="/md/feedback" element={<MDFeedback />} />
        <Route path="/md/rents" element={<MDRents />} />
        <Route path="/md/transactions" element={<MDTransactions />} />
        <Route path="/md/users" element={<MDUsers />} />
        <Route path="/md/passdue" element={<MDPassDue />} />
        <Route path="/me" element={<UsersProfile />} />

        <Route path="/lands" element={<AvailableLands />} />
        <Route path="/rents" element={<AvailableRents />} />

        <Route path="/map/:lat/:lng" element={<ViewInMap />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
