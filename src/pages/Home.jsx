import Banner from '../components/Banner';
import Doctor from '../components/Doctor';
import Header from '../components/Header';
import List from '../components/List';
import Menu from '../components/Menu';
import Services from '../components/Services';
import Speciality from '../components/Speciality';
// import Preloader from '../components/Preloader';

const Home = () => {
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
  </div>
</>

    );
};

export default Home;