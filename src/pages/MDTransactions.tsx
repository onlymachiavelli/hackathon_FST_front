import TransactionCard from '../components/TransactionCard'
import TopBar from '../layout/Moderator/TopBar'
import SideBar from '../layout/Moderator/SideBar'
import { useTransaction } from '../store'
import { useEffect } from 'react'
const MDTransactions = () => {
  const store = useTransaction()
  useEffect(() => {
    store.launchGetLandTransaction()
  }, [])

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
            Transactions Log
          </h1>
        </header>
        <main className=" min-h-0 border-t grid  pt-12 place-items-center">
          <div className="w-full grid gap-2 grid-cols-2 px-10 place-items-center ">
            {store.lands.map(tx => (
              <TransactionCard
                key={tx.id}
                fullname={tx.owner.fullname}
                amount={tx.owner.residentAtPriceOf}
                date={`${tx.month}/${tx.year}`}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MDTransactions
