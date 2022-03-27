import SideBar from '../layout/Landlord/SideBar'
import TopBar from '../layout/Landlord/TopBar'
import { useResidents } from '../store'
import { useEffect } from 'react'

const LLModerators = () => {
  const store = useResidents()

  useEffect(() => {
    store.launchGetMods()
  }, [])

  return (
    <>
      <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <header
            aria-label="page caption"
            className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
          >
            <h1 id="page-caption" className="text-lg">
              Moderators View
            </h1>
          </header>
          <main className="min-h-0 border-t">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Moderator ID
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
                    Property in Charge
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>

              <tbody>
                {store.mods.map(mod => (
                  <tr key={mod.id} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {mod.id}
                    </th>
                    <td className="px-6 py-4">{mod.fullname}</td>
                    <td className="px-6 py-4">{mod.phone}</td>
                    <td className="px-6 py-4">{mod.email}</td>
                    <td className="px-6 py-4">
                      <i>{mod.username}</i>
                    </td>
                    <td className="px-6 py-4">
                      lat: {mod.moderatedLand.latitude}
                      <br />
                      lng: {mod.moderatedLand.longitude}
                    </td>

                    <td className="px-9 py-4 text-right ">
                      <button className="button inlineIcon edit"></button>
                      <button className="button inlineIcon delete"></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  )
}

export default LLModerators
