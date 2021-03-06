import { Building } from './svg'
const Left = () => {
  return (
    <div className="grid place-content-center h-full">
      <Building Width="300" />
      <p className="text-center font-bold mt-4 text-xl text-gray-900">
        Welcome Back!
      </p>
      <p className="w-full block text-center mt-3">
        Manage your lands through our platform...
      </p>
    </div>
  )
}

export default Left
