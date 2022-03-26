import { Link } from 'react-router-dom'
const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="grid grid-cols-5">
      <aside className="h-screen bg-green flex flex-col gap-y-6 p-10 text-white uppercase font-medium">
        <Link to="/">Dashboard</Link>
        <Link to="/">My Lands</Link>
        <Link to="/">My Moderator</Link>
        <Link to="/">Moderator Requests</Link>
      </aside>
      <main className="col-span-4">
        <nav className="flex items-center justify-end w-full p-4">
          <button className="bg-red-500 px-4 py-2 rounded text-white">
            Logout
          </button>
        </nav>

        <section className="p-10">{children}</section>
      </main>
    </div>
  )
}

export default Layout
