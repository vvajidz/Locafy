import BrowseCategories from "@/Components/Category"
import { HeroSection } from "../Components/HeroSection"
import { Navbar } from "../Components/Navbar"
import WhyChooseLocafy from "@/Components/MiddleSection"
import TrustedByThousands from "@/Components/TrustedyBy"
import Footer from "@/Components/Footer"

function Home() {


  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <BrowseCategories/>
        <WhyChooseLocafy/>
        <TrustedByThousands/>
        <Footer/>
        
      
    </div>
  )
}

export default Home
