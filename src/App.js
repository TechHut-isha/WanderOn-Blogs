import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <Navbar />
    <Mainpage />
    <Routes>
      <Route path="/" />
      <Route path="/products" />
      <Route path="/contact" />
      <Route path="/about" />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
