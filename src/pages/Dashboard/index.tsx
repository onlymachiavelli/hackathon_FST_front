import Card from "../../layout/Card"
import NotificationPanel from "../../components/NotificationPanel"
import TopBar from "../../layout/TopBar"
import SideBar from "../../layout/SideBar"


const Dashboard = () =>{
    return (
        <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
            <SideBar />            
            <div className="flex-1 flex flex-col">
            <TopBar/>
            <header aria-label="page caption" className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
            <h1 id="page-caption" className="text-lg">Hello Mod.</h1>
            </header>
                <NotificationPanel>
                    <Card/>
                    <Card/>

                </NotificationPanel>
            </div>
            </div>
    )
}


export default Dashboard