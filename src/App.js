import "./GeneralStyles.css";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import Projects from "./sections/Projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Main>
        <About />
        <Projects />
      </Main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
