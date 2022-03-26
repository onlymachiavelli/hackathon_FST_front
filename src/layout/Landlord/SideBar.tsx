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
            to="/ll/"
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
            title="Moderators"
            to="/ll/moderators"
            className={({ isActive }) => {
              return `h-16 px-6 flex items-center text-white w-full ${
                isActive ? 'bg-green' : ''
              }`
            }}
          >
            <i className="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.5 2c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2.01.89-2 2 0 1.11.89 2 2 2zM11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86-.56-.1-1.09-.16-1.53-.16-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78c-2.27-.13-4.29-1.21-5.66-2.86z"/></svg>
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink
            title="Properties"
            to="/ll/properties"
            className={({ isActive }) => {
              return `h-16 px-6 flex items-center text-white w-full ${
                isActive ? 'bg-green' : ''
              }`
            }}
          >
            <i className="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
            </i>
          </NavLink>
        </li>
        <li>
          <NavLink
            title="Requests"
            to="/ll/requests"
            className={({ isActive }) => {
              return `h-16 px-6 flex items-center text-white w-full ${
                isActive ? 'bg-green' : ''
              }`
            }}
          >
            {' '}
            <i className="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fill-rule="evenodd"/><polygon fill-rule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="7"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="11"/><rect fill-rule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
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
