import CTA from "./components/CTA"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Operations from "./components/Operations"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Feature />
      <Operations />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
