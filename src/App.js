import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import Shop from './pages/shop/shop';
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import EmailRestAPI from './components/EmailRestAPI';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import InstagramPopup from './components/InstagramPopup';
import NotFoundPage from './components/NotFoundPage';
import Team from './components/Team'; 
import BuyPage from './components/BuyPage';

function App() {
  const [showInstagramPopup, setShowInstagramPopup] = useState(true);

  const handleCloseInstagramPopup = () => {
    setShowInstagramPopup(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/EmailRestAPI" element={<EmailRestAPI />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/team" element={<Team />} /> 
            <Route path="/checkout" element={<BuyPage />} /> 
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </ShopContextProvider>
      </Router>
      {showInstagramPopup && <InstagramPopup onClose={handleCloseInstagramPopup} />}
    </div>
  );
}

export default App;