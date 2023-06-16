import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Navbar, StarsCanvas } from "./components";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Works = lazy(() => import("./components/Works"));
const Tech = lazy(() => import("./components/Tech"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Suspense fallback={<div></div>}>
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<div></div>}>
          <About />
          <Works />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<div></div>}>
            <Tech/>
            
            <Contact />
            <StarsCanvas/>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
