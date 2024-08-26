import ClientManager from '../components/adminPanel/ClientManager'
import ContactManager from '../components/adminPanel/Contactmanager'
import Navbar from '../components/adminPanel/Navbar'
import NewsManager from '../components/adminPanel/NewsManager'
import ProjectManager from '../components/adminPanel/ProjectManager'

const AdminPanel = () => {
  return (
    <>
<div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
  <Navbar />
</div>
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