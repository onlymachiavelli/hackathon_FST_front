import { NavLink, Link } from "react-router-dom"
const TopBar = () => {
  return (
    <nav
      aria-label="top bar"
      className="flex-none flex justify-between bg-gray-50 h-16"
    >
      <ul
        aria-label="top bar left"
        aria-orientation="horizontal"
        className="flex"
      >
        <li><Link to="/">
          <img
            className="ml-5 h-11 w-auto mx-auto my-3"
            src="/public/assets/fulllogo.png"
          />
          </Link>
        </li>
      </ul>

      <ul
        aria-label="top bar center"
        aria-orientation="horizontal"
        className="flex mx-auto ml-2 mt-5"
      >
          <li><NavLink to="/" className={({ isActive }) => {
              return `p-5 text-xl ${
                isActive ? 'font-bold' : ''
              }`
            }}>
          Homepage
          </NavLink>
        </li>
        <li><NavLink to="/lands" className={({ isActive }) => {
              return `p-5 text-xl ${
                isActive ? 'font-bold' : ''
              }`
            }}>
          Properties
          </NavLink>
        </li>
        <li><NavLink to="/rents" className={({ isActive }) => {
              return `p-5 text-xl ${
                isActive ? 'font-bold' : ''
              }`
            }}>
          Rents
          </NavLink>
        </li>
      </ul>



      <ul
        aria-label="top bar right"
        aria-orientation="horizontal"
        className="px-9 flex items-center"
      >
        <li>
          <button
            type="submit"
            className=" pl-4 text-[white] bg-red  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
          >
            Leave
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar
