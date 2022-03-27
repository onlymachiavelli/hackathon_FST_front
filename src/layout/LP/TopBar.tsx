import { NavLink } from "react-router-dom"
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
        <li><NavLink to="/">
          <img
            className="h-11 w-auto mx-auto my-3"
            src="/public/assets/fulllogo.png"
          />
          </NavLink>
        </li>
      </ul>

      <ul
        aria-label="top bar center"
        aria-orientation="horizontal"
        className="flex ml-20 mt-4"
      >
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
