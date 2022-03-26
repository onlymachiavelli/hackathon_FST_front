import Card from '../layout/Card'
import NotificationPanel from '../components/NotificationPanel'
import TopBar from '../layout/Landlord/TopBar'
import SideBar from '../layout/Landlord/SideBar'
import Stats from '../components/Stats'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const LLDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#38743d"
      }
    ]
  };

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
                <NotificationPanel title="Updates">
                    <Card title="Issue with my bath tub" body="I need a plomber this afternoon" footer="Appartment 45"/>
                    
                </NotificationPanel>
                <div className="flex-col">

                <section aria-label="main content" className="flex min-h-0 flex-col flex-auto border-l">
                <Stats paid="26" notpaid="14" rented="50" vacant="10"/>
                </section>
                <div className='border-l h-screen w-full'>
                <br/><br/>

                  <Chart type="line" data={data}/>
                </div>
                </div>
                </main>

            </div>
            </div>
  )
}

export default LLDashboard
