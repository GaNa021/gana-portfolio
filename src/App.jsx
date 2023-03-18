import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Works, Tech } from "./components";

function App() {
  return (
    <div className="grid h-screen overflow-auto snap-y scroll-smooth scrollbar-hide bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
      </BrowserRouter>
    </div>
  );
}

export default App;
