import Card from '../layout/Card'
import NotificationPanel from '../components/NotificationPanel'
import TopBar from '../layout/Landlord/TopBar'
import SideBar from '../layout/Landlord/SideBar'
import Stats from '../components/Stats'
const LLDashboard = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
            <SideBar/>            
            <div className="flex-1 flex flex-col">
            <TopBar/>
            <header aria-label="page caption" className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
            <h1 id="page-caption" className="text-lg">
              Landlord's Dashboard
            </h1>
            </header>
            <main className="flex-grow flex min-h-0 border-t">
                <NotificationPanel>
                    <Card title="Issue with my bath tub" body="I need a plomber this afternoon" footer="Appartment 45"/>
                    
                </NotificationPanel>
                <section aria-label="main content" className="flex min-h-0 flex-col flex-auto border-l">
                <Stats paid="26" notpaid="14" rented="50" vacant="10"/>
                </section>
                </main>

            </div>
            </div>
  )
}

export default LLDashboard
