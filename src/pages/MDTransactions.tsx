import TransactionCard from '../components/TransactionCard'
import TopBar from '../layout/Moderator/TopBar'
import SideBar from '../layout/Moderator/SideBar'

const MDTransactions = () => {
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
        <main className=" min-h-0 border-t grid grid-cols-2 pt-12 place-items-center">
          <div className="w-full grid gap-y-2 px-10 place-items-center ">
            <TransactionCard
              fullname={'Only Machiavelli'}
              amount={69.42}
              date={'12/12/2022'}
            />

            <TransactionCard
              fullname={'Only Machiavelli'}
              amount={69.42}
              date={'12/12/2022'}
            />

            <TransactionCard
              fullname={'Only Machiavelli'}
              amount={69.42}
              date={'12/12/2022'}
            />

            <TransactionCard
              fullname={'Only Machiavelli'}
              amount={69.42}
              date={'12/12/2022'}
            />
          </div>
          <div></div>
        </main>
      </div>
    </div>
  )
}

export default MDTransactions
