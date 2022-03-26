import { useEffect } from 'react'
import Form from '../components/formSignUp'
const Signup = () => {
  useEffect(() => {
    document.title = 'Create an account'
  }, [])
  return (
    <div className="w-full h-screen bg-white p-4">
      <div className="grid grid-cols-2">
        <div></div>
        <div className="bg-white/50 w-full p-20">
          <p className="font-bold  text-gray-900 text-3xl text-center ">
            Create Account
          </p>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Signup
