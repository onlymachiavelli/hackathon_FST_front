import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Form from '../components/formSignUp'
import { Building } from '../components/svg'
import TopBar from '../layout/LP/TopBar'
const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Create Account</title>
      </Helmet>
      <TopBar/>
      <div className="w-full h-screen bg-white p-4 overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="grid place-content-center">
            <Building Width="400" />
          </div>
          <div className="bg-white/50 w-full p-20">
            <p className="font-bold  text-gray-900 text-3xl text-center ">
              Create Account
            </p>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
