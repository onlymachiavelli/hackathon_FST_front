import { Money } from './svg'
const TransacitonCard = ({ ...props }: any) => {
  return (
    <div className="bg-[white] h-auto w-full p-4 rounded-md flex border ">
      <Money Height={'24'} color={'#38743d'} /> &nbsp;
      <p className="font-bold text-green">{props.fullname}&nbsp;</p>
      <p className="text-green">Has Payed&nbsp;</p>
      <p className="font-bold text-green">{props.amount}&nbsp;</p>
      <p className="text-green">TND On</p>
      <p className="font-bold text-green"> &nbsp;{props.date}</p>
    </div>
  )
}

export default TransacitonCard
