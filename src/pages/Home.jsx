import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from '../components/Banner';
import Doctor from '../components/Doctor';
import Header from '../components/Header';
import List from '../components/List';
import Menu from '../components/Menu';
import Services from '../components/Services';
import Speciality from '../components/Speciality';
import Reasons from "../components/Reasons";
// import Preloader from '../components/Preloader';




const Home = () => {

     useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Refresh after React render
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);


    return (
            <>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    <Header />
    <Menu />
    <Banner />
     <List />
     <Speciality />
     <Doctor />
      <Services />
      <Reasons />
  </div>
</>

    );
};

export default Home;