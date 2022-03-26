import Left from "../components/left_login"
import Right from "../components/right_login"
const Signin = () =>{
    return (
        <div className="w-full h-screen grid place-content-center grid-cols-2  ">
            <aside className="w-full h-screen bg-white ">
                <Left/>
            </aside>
            <aside className="w-full h-screen bg-gray-100 grid place-content-center">
                <Right/>    
            </aside>
        </div>
    )
}

export default Signin