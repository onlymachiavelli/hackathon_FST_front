import TransacitonCard from '../components/TransactionCard'
import Layout from '../layout/ModeratorLayout'

const Moderator = () => {
  return (
    <Layout>
      <h1>Transactions CRUD</h1>

      <div className="grid gap-y-2 p-10 place-items-center">
        <TransacitonCard
          fullname={'Only Machiavelli'}
          amount={69.42}
          date={'12/12/2022'}
        />

        <TransacitonCard
          fullname={'Only Machiavelli'}
          amount={69.42}
          date={'12/12/2022'}
        />

        <TransacitonCard
          fullname={'Only Machiavelli'}
          amount={69.42}
          date={'12/12/2022'}
        />

        <TransacitonCard
          fullname={'Only Machiavelli'}
          amount={69.42}
          date={'12/12/2022'}
        />
      </div>
    </Layout>
  )
}

export default Moderator
