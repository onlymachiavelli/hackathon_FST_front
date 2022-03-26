export const Right = () =>{
    return (
        <div className="w-full  ">
            <form >
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
            <input type="email" id="email" className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your Password</label>
            <input placeholder="Password" type="password" id="password" className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
        </div>
        <div className="flex items-start mb-6">
            
            <div className="ml-3 text-sm">
            </div>
        </div>
        <button type="submit" className="text-white bg-green  focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  " >Submit</button>
        </form>
        </div>
    )
}

export default Right