import Category from "../../components/Category/Category"
import Contact from "../../components/Contact"
import FeaturedProducts from "../../components/FeatureProducts/FeaturedProducts"
import Slider from "../../components/Slider"
import Stats from "../../components/Stats"


const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type='featured'/>
      <Stats />
      <Category />
      <FeaturedProducts type='trending'/>
      <Contact />
    </div>
  )
}

export default Home