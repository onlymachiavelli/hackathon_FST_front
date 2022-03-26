import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../store'

const Form = () => {
  const push = useNavigate()
  const store = useUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    store.launchSignup(data, () => {
      push('/signin')
    })
  }

  return (
    <form className="w-full" onSubmit={handleSubmit} method="post">
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Your Full Name
        </label>
        <input
          type="text"
          name="fullname"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
          placeholder="Full Name"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Your Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
          placeholder="Your Phone Number"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Your email
        </label>
        <input
          type="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Your Secured Password
        </label>
        <input
          min={8}
          type="password"
          name="password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-green hover:bg-hoverGreen   font-medium rounded-sm text-sm px-5 py-2.5 text-center "
      >
        Register new account
      </button>
      <br />
      <br />
      <Link to="/signin">Already Have an account ? </Link>
    </form>
  )
}

export default Form
