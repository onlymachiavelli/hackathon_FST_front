import Left from '../components/left_login'
import Right from '../components/right_login'
import { Helmet } from 'react-helmet-async'
import TopBar from '../layout/LP/TopBar'
const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Login Account</title>
      </Helmet>
      <TopBar/>
      <div className="w-full h-screen grid place-content-center grid-cols-2  ">
        <aside className="w-full h-screen bg-white ">
          <Left />
        </aside>
        <div className="bg-white/50 w-full p-20">
          <p className="font-bold  text-gray-900 text-3xl text-center ">
            Access Account
          </p>
          <Right />
        </div>
      </div>
    </>
  )
}

export default Signin
