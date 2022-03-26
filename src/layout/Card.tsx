const Card = () =>{
    return (
        <article className="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500">
        <div className="flex-1">
        <header className="mb-1">
          Tarun T <span>commented</span> on
          <h1 className="inline">"RE: WPMS issue".</h1>
        </header>
        <p className="text-gray-600">
          Hi Mazhar, Please note this issue comes when user is not
          closing or logout sy…
        </p>
        <footer className="text-gray-500 mt-2 text-sm">
          Friday 22:16
        </footer>
      </div>
    </article>
    )
}


export default Card