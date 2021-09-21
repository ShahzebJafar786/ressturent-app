import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Banners from "../components/Banners";

import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
      
          <Categories />
          
          <Banners />
          <Features />
        
        <Footer />
      </main>
    </>
  );
}

export default Home;
