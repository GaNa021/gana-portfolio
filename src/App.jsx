import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Works } from "./components";

function App() {
  return (
    <div className="grid h-screen overflow-auto snap-y scroll-smooth scrollbar-hide bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Works />
      </BrowserRouter>
    </div>
  );
}

export default App;
