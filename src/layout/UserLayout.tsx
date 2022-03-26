import { Link } from 'react-router-dom'
const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <main>
      <nav className="flex items-center justify-end w-full p-4">
        <h1>Hello, John Doe (Landlord)</h1>

        <button className="bg-red-500 px-4 py-2 rounded text-white">
          Logout
        </button>
      </nav>

      <section className="p-10">{children}</section>
    </main>
  )
}

export default Layout
