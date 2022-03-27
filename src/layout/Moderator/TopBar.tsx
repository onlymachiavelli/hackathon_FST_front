import { useUser } from '../../store'
import { Link, useNavigate } from 'react-router-dom'
const TopBar = () => {
  const store = useUser()
  const push = useNavigate()

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
        <li>
          <Link to="/">
            <img
              className="h-11 w-auto mx-auto my-3"
              src="/public/assets/landhippo.png"
            />
          </Link>
        </li>
      </ul>

      <ul
        aria-label="top bar right"
        aria-orientation="horizontal"
        className="px-9 flex items-center"
      >
        <li>
          <span>{store.user?.fullname}</span>
          <button
            onClick={() => {
              store.logout(() => {
                push('/signin')
              })
            }}
            className=" ml-4 text-[white] bg-red  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
          >
            Leave
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar
