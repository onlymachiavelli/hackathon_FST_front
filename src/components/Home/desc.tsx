import { Building } from '../svg'
const Desc = () => {
  return (
    <div className="grid grid-cols-1 place-content-center"><div className="w-full flex items-center justify-center">
    <div className="flex items-center justify-center ">
      <div>
        <Building Height="300" />
      </div>
      <div className="">
        <p className="font-bold text-green text-3xl">About Our Product</p>
        <p className="text-left p-3 w-3/5 text-xl">
          Lorem ipsum dolor sit amet. Aut omnis tempore eum consequatur harum
          ab placeat aperiam. Aut quia nisi ut numquam commodi qui suscipit
          alias quo praesentium velit.suscipit alias quo praesentium velit.
        </p>
      </div>
    </div>
  </div></div>
  )
}

export default Desc
