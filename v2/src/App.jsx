import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
