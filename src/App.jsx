import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden' id="home">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-red-600/20 rounded-full blur-3xl -bottom-24 -left-24 animate-pulse delay-700"></div>
      </div>
        <div>
          <Navbar />
          
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
          <Contact />
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
