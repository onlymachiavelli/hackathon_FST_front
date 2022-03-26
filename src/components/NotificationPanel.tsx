import Card from '../layout/Card'

const NotificationPanel = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <section className="flex flex-col p-4 w-full max-w-sm flex-none bg-gray-100 min-h-0 overflow-auto">
      <h1 className="mb-3">Reclaims</h1>
      <ul>
        <li>{children}</li>
      </ul>
    </section>
  )
}

export default NotificationPanel
