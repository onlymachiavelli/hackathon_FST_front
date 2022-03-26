import Card from "./card"

const NotificationPanel = ({ children }: { children: JSX.Element | JSX.Element[] }) =>{
    return (
        <main className="flex-grow flex min-h-0 border-t">
        <section className="flex flex-col p-4 w-full max-w-sm flex-none bg-gray-100 min-h-0 overflow-auto">
          <h1 className="mb-3">
            Updates
          </h1>
          <ul>
            <li>
              {children}
        </li>
        </ul>
        </section>
        </main>
    )
}


export default NotificationPanel