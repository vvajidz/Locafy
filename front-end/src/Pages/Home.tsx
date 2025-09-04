import BrowseCategories from "@/Components/Category"
import { HeroSection } from "../Components/HeroSection"
import { Navbar } from "../Components/Navbar"
import WhyChooseLocafy from "@/Components/MiddleSection"

function Home() {


  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <BrowseCategories/>
        <WhyChooseLocafy/>
      
    </div>
  )
}

export default Home
