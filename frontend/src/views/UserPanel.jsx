import Clients from '../components/userPanel/clients/Clients'
import Contact from '../components/userPanel/contactForm/Contact'
import Navbar from '../components/userPanel/navbar/Navbar'
import Footer from '../components/userPanel/newsletter/Footer'
import Projects from '../components/userPanel/projects/Projects'
import Promo from '../components/userPanel/pages/Promo'
import Services from '../components/userPanel/pages/Services'
import About from '../components/userPanel/pages/About'

const UserPanel = () => {
  return (
    <>
    <Navbar/>
    <Contact/>
    <Promo/>
    <Services/>
    <About/>
    <Projects/>
    <Clients/>
    <Footer/>
    </>
  )
}

export default UserPanel