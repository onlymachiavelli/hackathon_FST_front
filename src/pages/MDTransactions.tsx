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
            Hello Mod.
          </h1>
        </header>
        <main className=" min-h-0 border-t  pt-7">
          <div className="grid gap-2 grid-cols-2 px-10 place-items-center ">
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
        </main>
      </div>
    </div>
  )
}

export default MDTransactions
