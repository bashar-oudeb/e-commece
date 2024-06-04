import Category from "../../components/Category/Category"
import Contact from "../../components/Contact"
import FeaturedProducts from "../../components/FeatureProducts/FeaturedProducts"
import Slider from "../../components/Slider"


const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type='featured'/>
      <Category />
      <FeaturedProducts type='trending'/>
      <Contact />
    </div>
  )
}

export default Home