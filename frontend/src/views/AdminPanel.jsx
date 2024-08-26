import ClientManager from '../components/adminPanel/ClientManager'
import ContactManager from '../components/adminPanel/Contactmanager'
import NewsManager from '../components/adminPanel/NewsManager'
import ProjectManager from '../components/adminPanel/ProjectManager'

const AdminPanel = () => {
  return (
    <>
    <ProjectManager />
    <ClientManager/>
    <NewsManager/>
    <ContactManager/>
    </>
  )
}

export default AdminPanel