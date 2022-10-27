
import './App.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import AboutSingle from './components/pages/AboutSingle'
import ServicesPage from './components/pages/ServicesPage'
import ProductsPage from './components/pages/ProductsPage'

function App() {
  return (
    <div className="App">
    <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<AboutSingle/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/Products" element={<ProductsPage/>} />
        </Routes>
    </Router>

    
    </div>
  );
}

export default App;
