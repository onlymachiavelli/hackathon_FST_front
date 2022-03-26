import TopBar from "../layout/TopBar"
import SideBar from "../layout/SideBar"
import "../buttons.css"
const MDUsers = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
            <SideBar/>            
            <div className="flex-1 flex flex-col">
            <TopBar/>
            <header aria-label="page caption" className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
            <h1 id="page-caption" className="text-lg">Tenants View</h1>
            <div className='mr-5 ml-auto'>
            <button className="button primary new"><span className='font-sans'>New Tenant</span></button>
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
            <td className="px-6 py-4"><a href='mailto:'><abbr title="jamesmcgill@gmail.com">Email</abbr></a></td>
            <td className="px-6 py-4"><i>jamesmcgill</i></td>
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
            </div>
  )

}

export default MDUsers
