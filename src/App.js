import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Team from './components/Team'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Team/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
