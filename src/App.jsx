import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/navbar'
import Footer from './components/navigation/footer'
import Home from './pages/1.home/1.homePage'
import About from './pages/2.About/1.aboutPage'
import AboutUs from './pages/2.About/0.aboutUsPage'
import TheTeam from './pages/2.About/0.theTeamPage'
import OurPartners from './pages/2.About/0.ourPartnersPage'
import Programs from './pages/3.programs/1.programsPage'
import GetInvolved from './pages/3.programs/0.getInvolvedPage'
import Donate from './pages/3.programs/0.donatePage'
import Membership from './pages/4.membership/1.membershipPage'
import MediaCenter from './pages/5.mediaCenter/1.mediaCenterPage'
import Publications from './pages/5.mediaCenter/0.publicationsPage'
import Gallery from './pages/5.mediaCenter/0.galleryPage'
import ContactUs from './pages/6.contactUs/1.contactUsPage'


function App () {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/about-us" element={<AboutUs />} />
          <Route path="/about/the-team" element={<TheTeam />} />
          <Route path="/about/our-partners" element={<OurPartners />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/get-involved" element={<GetInvolved />} />
          <Route path="/programs/donate" element={<Donate />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/media-center" element={<MediaCenter />} />
          <Route path="/media-center/publications" element={<Publications />} />
          <Route path="/media-center/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
  )

}


export default App
