import Layout from '../layout/LandlordLayout'
import ModCard from './../components/ModeratorReqCard'
const LandLoard = () => {
  return (
    <Layout>
      <h1>Moderators Requests CRUD</h1>
      <br />
      <div className="w-7/12 grid grid-cols-1">
        <div className="gap-2 grid ">
          <ModCard fullname="Mr Machiavelli" land="Github" />
          <ModCard fullname="Mr Nie-Mand" land="Google" />
        </div>
        <div></div>
      </div>
    </Layout>
  )
}

export default LandLoard
