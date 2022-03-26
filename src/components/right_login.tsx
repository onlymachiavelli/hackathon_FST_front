export const Right = () =>{
    return (
        <form className="max-w-xl w-full ">
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" id="email" className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input placeholder="Password" type="password" id="password" className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5  " required />
        </div>
        <div className="flex items-start mb-6">
            
            <div className="ml-3 text-sm">
            </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default Right