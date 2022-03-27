import FBCard from './fbackcard'
import { useFeedback } from '../store'
import { useEffect } from 'react'

const Moderator = () => {
  const store = useFeedback()

  useEffect(() => {
    store.launchGetMine()
  }, [])

  return (
    <>
      <h1 className="font-bold">Feedback CRUD</h1>
      <div className="grid gap-1 grid-cols-2 pt-5">
        {store.all.map(item => (
          <FBCard
            key={item.id}
            fullname="Si Machiavelli"
            description="My Bathroom Is Broken ! there's some sort of shit in there"
          />
        ))}
      </div>
    </>
  )
}

export default Moderator
