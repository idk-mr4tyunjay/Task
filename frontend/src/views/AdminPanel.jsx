import ClientManager from '../components/adminPanel/ClientManager'
import ContactManager from '../components/adminPanel/Contactmanager'
import NewsManager from '../components/adminPanel/NewsManager'
import ProjectManager from '../components/adminPanel/ProjectManager'

const AdminPanel = () => {
  return (
    <>
    <ProjectManager />
    <ClientManager/>
    <div className='d-flex justify-content-around mt-5'>
      <NewsManager/>
      <ContactManager/>
    </div>
    </>
  )
}

export default AdminPanel