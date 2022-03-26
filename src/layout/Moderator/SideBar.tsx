import { NavLink } from 'react-router-dom'
import { useUser } from '../../store'
const SideBar = () => {
  const store = useUser()

  return (
    <nav
      aria-label="side bar"
      aria-orientation="vertical"
      className="flex-none flex flex-col items-center text-center bg-black text-gray-400 border-r"
    >
      <div className="h-16 flex items-center w-full">
        <img className="h-auto w-8 mx-auto" src="/public/assets/logo.png" />
      </div>

      <ul>
        <li>
          <NavLink
            title="Homepage"
            to="/md/"
            className={({ isActive }) => {
              return `h-16 px-6 flex items-center text-white w-full ${
                isActive ? 'bg-green' : ''
              }`
            }}
          >
            <i className="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><rect fill="none" height="24" width="24"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M5,19V5h6v14H5z M19,19h-6v-7h6V19z M19,10h-6V5h6V10z"/></svg>
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink
            title="Tenants"
            to="/md/users"
            className={({ isActive }) => {
              return `h-16 px-6 flex items-center text-white w-full ${
                isActive ? 'bg-green' : ''
              }`
            }}
          >
            <i className="mx-auto">
              
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"/></svg>
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink
            title="Transactions"
            to="/md/transactions"
            className={({ isActive }) => {
              return `h-16 px-6 flex items-center text-white w-full ${
                isActive ? 'bg-green' : ''
              }`
            }}
          >
            <i className="mx-auto">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
              </svg>
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink
            title="Manage Rents"
            to="/md/rents"
            className={({ isActive }) => {
              return `h-16 px-6 flex items-center text-white w-full ${
                isActive ? 'bg-green' : ''
              }`
            }}
          >
            {' '}
            <i className="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><g><rect fill="none" height="24" width="24"/><path d="M19,14V6c0-1.1-0.9-2-2-2H3C1.9,4,1,4.9,1,6v8c0,1.1,0.9,2,2,2h14C18.1,16,19,15.1,19,14z M17,14H3V6h14V14z M10,7 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S11.66,7,10,7z M23,7v11c0,1.1-0.9,2-2,2H4c0-1,0-0.9,0-2h17V7C22.1,7,22,7,23,7z"/></g></svg>
            </i>
          </NavLink>
        </li>
      </ul>

      <div className="mt-auto h-16 flex items-center w-full">
        <img
          className="h-auto w-10 mx-auto rounded-sm"
          src={`https://ui-avatars.com/api/?name=${store.user?.fullname}`}
        />
      </div>
    </nav>
  )
}

export default SideBar
