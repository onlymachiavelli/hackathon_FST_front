import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/login'
import Home from './pages/home'
const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
