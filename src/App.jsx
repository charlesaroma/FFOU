import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/navigation/navbar'
import Footer from './components/navigation/footer'
import Home from './pages/1.home/HomePage'
import About from './pages/2.About/AboutMainPage'
import AboutUs from './pages/2.About/about-us/AboutUsPage'
import TheTeam from './pages/2.About/the-team/TeamPage'
import OurPartners from './pages/2.About/our-partners/PartnersPage'
import Programs from './pages/3.programs/programs/ProgramsPage'
import ProgramDetails from './pages/3.programs/programs/ProgramDetails'
import GetInvolved from './pages/3.programs/get-involved/GetInvolvedPage'
import GetInvolvedForm from './pages/3.programs/get-involved/GetInvolvedForm'
import DonatePage from './pages/3.programs/donate/DonatePage'
import Membership from './pages/4.membership/MembershipPage'
import MediaCenter from './pages/5.mediaCenter/1.mediaCenterPage'
import Publications from './pages/5.mediaCenter/publications/PublicationsPage'
import Gallery from './pages/5.mediaCenter/gallery/GalleryPage'
import ContactUs from './pages/6.contactUs/ContactUsPage'


function App () {
  return (
      <div className="overflow-x-hidden w-full min-h-screen flex flex-col">
        <Router>
          <ScrollToTop />
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/about-us" element={<AboutUs />} />
              <Route path="/about/the-team" element={<TheTeam />} />
              <Route path="/about/our-partners" element={<OurPartners />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/get-involved" element={<GetInvolved />} />
              <Route path="/programs/get-involved/form" element={<GetInvolvedForm />} />
              <Route path="/programs/donate" element={<DonatePage />} />
              <Route path="/programs/:slug" element={<ProgramDetails />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/media-center" element={<MediaCenter />} />
              <Route path="/media-center/publications/:category?" element={<Publications />} />
              <Route path="/media-center/gallery" element={<Gallery />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
  )
}


export default App
