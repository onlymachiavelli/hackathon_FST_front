import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/login'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
