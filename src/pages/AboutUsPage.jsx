import Footer from '../components/Footer'
import { AboutUs, OurTeam, Testimonials } from '../components/AboutUs'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

export default function AboutUsPage() {
  const { pathname } = useLocation()
  const PageContent = pathname === '/testimonial' ? Testimonials : pathname === '/our-team' ? OurTeam : AboutUs

  return (
    <>
      <Navbar />
      <PageContent />
      <Footer />
    </>
  )
}
