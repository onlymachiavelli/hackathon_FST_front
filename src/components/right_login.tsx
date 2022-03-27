import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../store'

export const Right = () => {
  const store = useUser()

  const push = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    await store.launchLogin(data.email, data.password, () => {
      push('/')
    })
  }

  return (
    <div className="w-full  ">
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your Password
          </label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="ml-3 text-sm text-red">{store.login.error}</div>
        </div>
        <button
          type="submit"
          className="text-white bg-green  focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
        >
          Submit
        </button>
        <br />
        <br />
        <Link to="/signup">You don't have an account ? </Link>
      </form>
    </div>
  )
}

export default Right
