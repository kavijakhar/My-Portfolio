
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfoilo";
import ProfassionalExperince from "./components/ProfassionalExperince";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProfassionalExperince/>
      <Portfolio />
      <Experience />
      <Contact/>
      <SocialLinks/>
    </>
  );
}

export default App;
