import Card from '../layout/Card'
import NotificationPanel from '../components/NotificationPanel'
import TopBar from '../layout/Moderator/TopBar'
import SideBar from '../layout/Moderator/SideBar'
import Stats from '../components/Stats'
import RentCard from '../components/RentCard'
import { Plus } from '../components/svg'
// @ts-ignore
import Modal from '../layout/Modal/index'
import { useState, useEffect } from 'react'
import { useRent } from '../store'
const MDDashboard = () => {
  const store = useRent()

  useEffect(() => {
    store.launchGetAll()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    await store.add(data)
    setShow(false)
  }

  const [show, setShow] = useState(false)

  return (
    <div className="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <header
          aria-label="page caption"
          className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
        >
          <h1 id="page-caption" className="text-lg">
            Moderator's Dashboard
          </h1>
        </header>
        <main className="flex-grow flex min-h-0 border-t overflow-y-scroll">
          <NotificationPanel title="Reclaims">
            <Card
              title="Issue with my bath tub"
              body="I need a plomber this afternoon"
              footer="Apartment 45"
            />
            <Card
              title="Issue with my bath tub"
              body="I need a plomber this afternoon"
              footer="Apartment 45"
            />
            <Card
              title="Issue with my bath tub"
              body="I need a plomber this afternoon"
              footer="Apartment 45"
            />
            <Card
              title="Issue with my bath tub"
              body="I need a plomber this afternoon"
              footer="Apartment 45"
            />
            <Card
              title="Issue with my bath tub"
              body="I need a plomber this afternoon"
              footer="Apartment 45"
            />
          </NotificationPanel>
          <div className="flex-col h-full w-full">
            <section
              aria-label="main content"
              className="flex min-h-0 flex-col flex-auto border-l"
            >
              <Stats paid="26" notpaid="14" rented="50" vacant="10" />
            </section>
            <section className="border-l h-full p-4 w-full ">
              <button
                onClick={() => setShow(true)}
                className="bg-green hover:bg-hoverGreen  text-white font-bold py-2 px-5 rounded-sm flex items-center justify-center"
              >
                <Plus Width="17" /> &nbsp; New Rent Offer
              </button>
              <div className="grid gap-1 grid-cols-2 pt-4 w-full">
                {store.all.map(rent => (
                  <RentCard
                    title={rent.title}
                    key={rent.id}
                    description={rent.content}
                  />
                ))}
              </div>
              <br />
              <br />
            </section>
          </div>
        </main>
      </div>
      <Modal title="New Rent Offer" onClose={() => setShow(false)} show={show}>
        <p>
          <div className="w-full  ">
            <form onSubmit={handleSubmit} method="post">
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Property Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Africa Building"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Property Description
                </label>
                <textarea
                  name="content"
                  className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-green hover:bg-hoverGreen focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
              >
                Submit
              </button>
              &nbsp;
              <button
                onClick={() => setShow(false)}
                type="reset"
                className="text-white bg-red hover:bg-hoverGreen focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
              >
                Cancel
              </button>
            </form>
          </div>
        </p>
      </Modal>
    </div>
  )
}

export default MDDashboard
