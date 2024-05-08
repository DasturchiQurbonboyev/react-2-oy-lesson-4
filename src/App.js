import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Like from './components/like/Like';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Like />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
