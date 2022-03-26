import ModCard from './../components/ModeratorReqCard'


import Card from '../layout/Card'
import NotificationPanel from '../components/NotificationPanel'
import TopBar from '../layout/Landlord/TopBar'
import SideBar from '../layout/Landlord/SideBar'
import Stats from '../components/Stats'
const LandLoard = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
            <SideBar/>            
            <div className="flex-1 flex flex-col">
            <TopBar/>
            <header aria-label="page caption" className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
            <h1 id="page-caption" className="text-lg">
              Moderation Requests
            </h1>
            </header>
            <main className="pt-12 min-h-0 border-t">
             
            <div className="w-full grid grid-cols-1 place-items-center">
        <div className="gap-2 grid grid-cols-2 ">
          <ModCard fullname="Mr Machiavelli" land="Github" />
          <ModCard fullname="Mr Nie-Mand" land="Google" />
        </div>
        <div></div>
      </div>

                </main>

            </div>
            </div>
  )
}

export default LandLoard

