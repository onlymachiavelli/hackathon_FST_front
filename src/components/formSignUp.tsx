import { Link } from 'react-router-dom'
const Form = () => {
  return (
    <form className="w-full">
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Your Full Name
        </label>
        <input
          type="text"
          id="name"
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
          id="phone"
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
          id="email"
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
          id="pass"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none  "
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-green   font-medium rounded-sm text-sm px-5 py-2.5 text-center "
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
