import Left from "../components/left_login"
import Right from "../components/right_login"
const Signin = () =>{
    return (
        <div className="w-full h-screen flex  ">
            <aside className="w-2/5 h-full bg-white ">
                <Left/>
            </aside>
            <aside className="w-3/5 h-full bg-gray-100 grid place-content-center">
                <Right/>

            </aside>
        </div>
    )
}

export default Signin