import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Works, Tech } from "./components";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="grid h-screen w-screen overflow-auto snap-y scroll-smooth scrollbar-hide bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
