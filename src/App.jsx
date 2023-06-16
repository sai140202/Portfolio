import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";


import { Hero, Navbar, StarsCanvas } from "./components";

const About = lazy(() => import("./components/About"))
const Works = lazy(() => import("./components/Works"))
const Tech = lazy(() => import("./components/Tech"))
const Contact = lazy(() => import("./components/Contact"))
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
    
        <Tech />
        <Works />
      
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
