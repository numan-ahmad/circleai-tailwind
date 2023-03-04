import Average from './components/Average';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import ManinSection from './components/MainSection';
import Navbar from './components/Navbar';
import Package from './components/Package';
import Sponser from './components/sponser';

export default function Home() {
  return (
    <>
      <Navbar />
      <ManinSection />
      <Blogs />
      <Package />
      <Average />
      <Sponser />
      <Footer />
    </>
  );
}
