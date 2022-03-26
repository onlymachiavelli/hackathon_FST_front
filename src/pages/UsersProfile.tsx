import TopBar from '../layout/Moderator/TopBar'
import { Money, Feed, Send } from '../components/svg'
import TransacitonCard from '../components/TransactionCard'
const Transactions = () => {
  return (
    <div>
      <TopBar />

      <div className="bg-white">
        <br />
        <p className="text-center text-gray-900 font-bold text-2xl">
          PAYEMENT BUTTONS
        </p>
        <div className="w-full flex items-center justify-center pt-4">
          <div className=" grid place-content-center pt-4 bg-[white] px-5 py-9 w-2/4 rounded">
            <br />
            <div className="flex items-center justify-center gap-1">
              <button className="bg-green hover:bg-hoverGreen  text-white font-bold py-3 px-7 rounded flex items-center justify-center">
                <Money Width="20" color="white" /> &nbsp; PAY X
              </button>
              <button className="bg-green hover:bg-hoverGreen  text-white font-bold py-3 px-7 rounded flex items-center justify-center">
                <Money Width="20" color="white" /> &nbsp; PAY Y
              </button>
              <button className="bg-green hover:bg-hoverGreen  text-white font-bold py-3 px-7 rounded flex items-center justify-center">
                <Money Width="20" color="white" /> &nbsp; PAY Z
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-900 font-bold text-2xl pt-4">
          TRANSACTIONS SECTION
        </p>
        <div className="grid grid-cols-2 gap-2 px-10 place-items-center py-4">
          <TransacitonCard
            fullname={'Only Machiavelli'}
            amount={69.42}
            date={'12/12/2022'}
          />

          <TransacitonCard
            fullname={'Only Machiavelli'}
            amount={69.42}
            date={'12/12/2022'}
          />

          <TransacitonCard
            fullname={'Only Machiavelli'}
            amount={69.42}
            date={'12/12/2022'}
          />

          <TransacitonCard
            fullname={'Only Machiavelli'}
            amount={69.42}
            date={'12/12/2022'}
          />
          <TransacitonCard
            fullname={'Only Machiavelli'}
            amount={69.42}
            date={'12/12/2022'}
          />

          <TransacitonCard
            fullname={'Only Machiavelli'}
            amount={69.42}
            date={'12/12/2022'}
          />
        </div>

        <div className="w-full flex items-center justify-center pt-4">
          <div className="bg-[white] h-auto w-3/4 p-7 rounded-md  border ">
            <div className="w-full flex items-center justify-center">
              <Feed Width="50" St="fill-red" />
            </div>
            <p className="text-center text-gray-900 font-bold text-2xl pt-4 block m-auto">
              SEND FEED BACK
            </p>
            <form method="post">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your FeedBack
                </label>
                <textarea
                  name="feedback"
                  className="outline-none bg-white border h-40 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Your FeedBack, Your Thoughts , Your Problems"
                  required
                ></textarea>
                <br />
                <div className="w-full flex items-center justify-center">
                  <button className="bg-green hover:bg-hoverGreen  text-white font-bold py-3 px-7 rounded flex items-center justify-center">
                    <Send Width="20" color="white" /> &nbsp; Send FeedBack
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default Transactions
