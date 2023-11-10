import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Productors from "./pages/Productors";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/producteurs" element={<Productors/>}/>
        <Route path="/our-team" element={<OurTeam/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
