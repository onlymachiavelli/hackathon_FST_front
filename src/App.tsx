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

import Protected from './components/Protected'

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
        <Route path="/ll/lands" element={<LLLands />} />
        <Route path="/ll/md" element={<LLModerators />} />
        <Route path="/ll/rqs" element={<LLRequests />} />

        <Route
          path="/md"
          element={
            <Protected role="MODERATOR">
              <MDDashboard />
            </Protected>
          }
        />
        <Route path="/md/feedback" element={<MDFeedback />} />
        <Route path="/md/rents" element={<MDRents />} />
        <Route path="/md/transactions" element={<MDTransactions />} />
        <Route path="/md/users" element={<MDUsers />} />
        <Route path="/md/passdue" element={<MDPassDue />} />
        <Route path="/me" element={<UsersProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
