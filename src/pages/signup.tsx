import {useEffect} from 'react'
import Form from '../components/formSignUp'
const Signup = () =>{
    useEffect(() => {
        document.title = "Create an account"
    }, [])
    return (
        <div className="w-full h-screen bg-white p-4">
            <p className="font-bold  text-gray-900 text-3xl text-center ">Create Account</p>
            <div className='w-4/5 h-auto bg-white/50 m-auto'>
                <Form/>
            </div>
        </div>  
    )
}

export default Signup