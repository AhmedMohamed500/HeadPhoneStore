
import BestSeller from "../components/BestSeller"
import Brands from "../components/Brands"
import HeroSection from "../components/Home/HeroSection"
import Join from "../components/Join"
import NewArrival from "../components/NewArrival"
import NewsFeed from "../components/NewsFeed"
import OurFeature from "../components/OurFeature"
import Promotion from "../components/Promotion"
import ShopCollection from "../components/ShopCollection"



const Home = () => {
  return (
    
    <>
    
    <div className='space-y-12'>

    <HeroSection/>
    <Brands/>
    <NewArrival/>
    <ShopCollection/>
    <BestSeller/>
    <Promotion/>
    <OurFeature/>
    <NewsFeed/>
    <Join/>
    
    
    </div>

    </>
  )
}

export default Home