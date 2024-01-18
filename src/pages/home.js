import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeadlineCards from '../components/HeadlineCards';
import Food from '../components/Food';
import Categprory from '../components/Category';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Categprory/>
      <Footer />
    </div>
  );
}

export default Home;
