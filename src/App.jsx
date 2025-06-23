import Hero from "./components/Hero";
import About from "./components/About";
import OurClients from "./components/OurClients";
import Services from "./components/Services";
import OurWorks from "./components/OurWorks";
import SmoothScroll from "./components/SmoothScroll";
import ImageZoom from "./components/ImageZoom";
import ChooseUs from "./components/ChooseUs";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <SmoothScroll>
      <main className="relative h-dvh w-screen">
        <Navbar />
        <Hero />
        <About />
        <OurClients />
        <Services />
        <OurWorks />
        <ImageZoom />
        <ChooseUs />
        <OurTeam />
        <Footer />
      </main>
    </SmoothScroll>
  );
};

export default App;
