import Contact from '../components/userPanel/contactForm/Contact'
import Navbar from '../components/userPanel/navbar/Navbar'
import Promo from '../components/userPanel/pages/Promo'
import Promo2 from '../components/userPanel/pages/Promo2'
import Promo3 from '../components/userPanel/pages/Promo3'
import Projects from '../components/userPanel/projects/Projects'

const UserPanel = () => {
  return (
    <>
    <Navbar/>
    <Contact/>
    <Promo/>
    <Promo2/>
    <Promo3/>
    <Projects/>
    </>
  )
}

export default UserPanel