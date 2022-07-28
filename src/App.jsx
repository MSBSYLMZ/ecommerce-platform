import './App.css';

import Header from './components/header/Header.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home-page.component';
import AuthPopup from './components/auth-popup/Auth-popup.component';
import ProductDetailsPage from './pages/product-details/Product-details-page.component';
import CheckoutPage from './pages/checkout/Checkout-page.component';
import useAuth from './hooks/useAuth';

function App() {
  const { hiddenAuthPopup } = useAuth();

  return (
    <div className="App">
      <Header/>
      { !hiddenAuthPopup ? <AuthPopup/> : null }
      <Routes>
            <Route path="/" exact element={ <HomePage/>} />
            <Route path="/details/:productId" exact element={ <ProductDetailsPage/>} />
            <Route path="/checkout/" exact element={ <CheckoutPage/>} />
      </Routes>
    </div>
  );
}

export default App;
