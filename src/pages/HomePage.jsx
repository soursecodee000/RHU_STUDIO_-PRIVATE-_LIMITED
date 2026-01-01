import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Contact from "../components/Contacts";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -70, // header height
      });
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
    </>
  );
}
