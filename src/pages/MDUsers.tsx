import TopBar from '../layout/Moderator/TopBar'
import SideBar from '../layout/Moderator/SideBar'
import '../buttons.css'
// @ts-ignore
import Modal from '../layout/Modal/index'
import { useState } from 'react'
import Reader from '../components/CsvReader'
import { useResidents } from '../store'

const MDUsers = () => {
  const [show, setShow] = useState(false)
  const store = useResidents()

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fromData = new FormData(e.currentTarget)
    const data = Object.fromEntries(fromData.entries())

    await store.addOne(data)

    setShow(false)
  }

  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <header
          aria-label="page caption"
          className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
        >
          <h1 id="page-caption" className="text-lg">
            Tenants View
          </h1>
          <div className="mr-5 ml-auto">
            <Reader />
            &nbsp;
            <button
              onClick={() => setShow(true)}
              className="button primary new"
            >
              <span className="font-sans">New Tenant</span>
            </button>
          </div>
        </header>
        <main className="min-h-0 border-t">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tenant ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Apt.
                </th>
                <th scope="col" className="px-6 py-3">
                  Given Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Handle
                </th>
                <th scope="col" className="px-6 py-3">
                  Rent Cost
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  10568452
                </th>
                <td className="px-6 py-4">23</td>
                <td className="px-6 py-4">James McGill</td>
                <td className="px-6 py-4">92911404</td>
                <td className="px-6 py-4">
                  <a href="mailto:">
                    <abbr title="jamesmcgill@gmail.com">Email</abbr>
                  </a>
                </td>
                <td className="px-6 py-4">
                  <i>jamesmcgill</i>
                </td>
                <td className="px-6 py-4">520.00 TND</td>

                <td className="px-9 py-4 text-right ">
                  <button className="button inlineIcon activate"></button>

                  <button className="button inlineIcon edit"></button>

                  <button className="button inlineIcon delete"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      <Modal title="New Tenant" onClose={() => setShow(false)} show={show}>
        <p>
          <div className="w-full  ">
            <form action="post" onSubmit={handleCreateUser}>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Tenant's Given Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Tenant's Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="12345678"
                  maxLength={8}
                  minLength={8}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Tenant's Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="johndoe@domain.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Rent Cost(TND)
                </label>
                <input
                  type="number"
                  name="residentAtPriceOf"
                  className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="123"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-green hover:bg-hoverGreen focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
              >
                Submit
              </button>
              &nbsp;
              <button
                onClick={() => setShow(false)}
                type="reset"
                className="text-white bg-red hover:bg-hoverGreen focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
              >
                Cancel
              </button>
            </form>
          </div>
        </p>
      </Modal>
    </div>
  )
}

export default MDUsers
