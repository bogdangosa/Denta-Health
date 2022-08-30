import Footer from '../Components/Navigation/Footer/Footer';
import Header from '../Components/Navigation/Header/Header';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import './App.css';
import {Routes,Route,useLocation} from 'react-router-dom'

const App = () => {
  let location = useLocation();

  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Team" element={<About/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
