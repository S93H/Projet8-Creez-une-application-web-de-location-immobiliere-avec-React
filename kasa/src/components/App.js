import logo from '../logo.svg';
import '../App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Error from "./Error";
import Housing from './Housing';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Housing/:id" element={<Housing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
