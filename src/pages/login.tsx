import Left from '../components/left_login'
import Right from '../components/right_login'
const Signin = () => {
  return (
    <div className="w-full h-screen grid place-content-center grid-cols-2  ">
      <aside className="w-full h-screen bg-white ">
        <Left />
      </aside>
      <div className="bg-white/50 w-full p-20">
        <p className="font-bold  text-gray-900 text-3xl text-center ">
          Create Account
        </p>
        <Right />
      </div>
    </div>
  )
}

export default Signin
