import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/products/Products';
import Hero from './components/hero/Hero';
import TopProducts from './components/topProducts/TopProducts';
import Subscribe from './components/subscribe/Subscribe';
import Banner from './components/banner/Banner';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';
import AOS from 'aos';
import "aos/dist/aos.css"
const App = () => {
  const [orderPopUp, setOrderPopUp] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopUp(!orderPopUp);
  };
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
    </div>
  );
}

export default App;
