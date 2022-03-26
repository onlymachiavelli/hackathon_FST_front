const Stats = ({...props}) =>{
    return (
        <nav className="bg-gray-100 flex p-4">
        <section aria-labelledby="open-tickets-tabs-label" className="mr-4 focus:outline-none">
          <label id="open-tickets-tabs-label" className="font-semibold block mb-1 text-sm">Current Month
          </label>
          <ul className="flex">
            <li>
              <button className="focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0 bg-white flex flex-col items-center w-24">
                <p className="font-semibold text-lg">{props.paid}</p>
                <p className="text-sm uppercase text-gray-600">
                  Paid
                </p>
              </button>
            </li>
            <li>
              <button className="focus:outline-none focus:bg-yellow-200 p-2 border rounded-r-md bg-white flex flex-col items-center w-24 cursor-pointer">
                <p className="font-semibold text-lg">{props.notpaid}</p>
                <p className="text-sm uppercase text-gray-600">
                  Not yet
                </p>
              </button>
            </li>
          </ul>
          </section>


          <section aria-labelledby="open-tickets-tabs-label" className="mr-4 focus:outline-none">
          <label id="open-tickets-tabs-label" className="font-semibold block mb-1 text-sm">Appartments
          </label>
          <ul className="flex">
            <li>
              <button className="focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0 bg-white flex flex-col items-center w-24">
                <p className="font-semibold text-lg">{props.rented}</p>
                <p className="text-sm uppercase text-gray-600">
                  Rented
                </p>
              </button>
            </li>
            <li>
              <button className="focus:outline-none focus:bg-yellow-200 p-2 border rounded-r-md bg-white flex flex-col items-center w-24 cursor-pointer">
                <p className="font-semibold text-lg">{props.vacant}</p>
                <p className="text-sm uppercase text-gray-600">
                  Vacant
                </p>
              </button>
            </li>
          </ul>
        </section>
       
      </nav>

    )
}


export default Stats