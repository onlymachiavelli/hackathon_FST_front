import Layout from '../layout/ModeratorLayout'
import Card from "../layout/Card"
import NotificationPanel from "../components/NotificationPanel"
import TopBar from "../layout/TopBar"
import SideBar from "../layout/SideBar"
import Stats from "../components/Stats"

const MDUsers = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
            <SideBar/>            
            <div className="flex-1 flex flex-col">
            <TopBar/>
            <header aria-label="page caption" className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
            <h1 id="page-caption" className="text-lg">Hello Mod.</h1>
            </header>
            <main className="flex-grow flex min-h-0 border-t">
                
                </main>

            </div>
            </div>
  )

}

export default MDUsers
