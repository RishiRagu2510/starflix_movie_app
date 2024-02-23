//Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Swiper styles
import 'swiper/css';
import BackToTop from '../components/BackToTop';
import Banner from '../pages/Banner';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
import Main from '../pages/Main';

import { useEffect, useState } from "react";

function Home() {
  const[scroll,setScroll]=useState(0);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setScroll(window.scrollY);
    });
    return()=>{
      window.removeEventListener('scroll',()=>{
        setScroll(window.scrollY);
      });
    };
  },[scroll]);
  return (
    <div>
   <Header scroll={scroll}/>
   <Banner/>
   <Main/>
   <Footer />
   <BackToTop scroll={scroll}/>
   </div>
  );
}

export default Home;