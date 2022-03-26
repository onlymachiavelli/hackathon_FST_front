import Card from '../layout/Card'
import NotificationPanel from '../components/NotificationPanel'
import TopBar from '../layout/Moderator/TopBar'
import SideBar from '../layout/Moderator/SideBar'
import Stats from '../components/Stats'
import RentCard from '../components/RentCard'
import { Plus } from '../components/svg'
const MDDashboard = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
            <SideBar/>            
            <div className="flex-1 flex flex-col">
            <TopBar/>
            <header aria-label="page caption" className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
            <h1 id="page-caption" className="text-lg">
              Moderator's Dashboard
            </h1>
            </header>
            <main className="flex-grow flex min-h-0 border-t">
                <NotificationPanel title="Reclaims">
                    <Card title="Issue with my bath tub" body="I need a plomber this afternoon" footer="Apartment 45"/>
                    <Card title="Issue with my bath tub" body="I need a plomber this afternoon" footer="Apartment 45"/>
                    <Card title="Issue with my bath tub" body="I need a plomber this afternoon" footer="Apartment 45"/>
                    <Card title="Issue with my bath tub" body="I need a plomber this afternoon" footer="Apartment 45"/>
                    <Card title="Issue with my bath tub" body="I need a plomber this afternoon" footer="Apartment 45"/>

                    
                </NotificationPanel>
                <div className="flex-col">
                <section aria-label="main content" className="flex min-h-0 flex-col flex-auto border-l">
                <Stats paid="26" notpaid="14" rented="50" vacant="10"/>
                </section>
      <section className="border-l h-screen p-4">
      <button className="bg-green hover:bg-hoverGreen  text-white font-bold py-2 px-5 rounded-sm flex items-center justify-center">
        <Plus Width="17" /> &nbsp; New Rent Offer
      </button>
      <div className="grid gap-1 grid-cols-2 pt-4">
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
        <RentCard description="lorem Lorem ipsum dolor sit amet. Et sequi omnis et voluptatem facere aut rerum minima et minus " />
      </div>
      </section>
      </div>
                </main>

            </div>
            </div>
  )
}

export default MDDashboard
