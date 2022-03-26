const Card = ({ ...props }) => {
  return (
    <article className="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500">
      <div className="flex-1">
        <header className="font-bold mb-1">
          <h1 className="inline">{props.title}</h1>
        </header>
        <p className="text-gray-600">{props.body}</p>
        <footer className="text-gray-500 mt-2 text-sm">{props.footer}</footer>
      </div>
    </article>
  )
}

export default Card
