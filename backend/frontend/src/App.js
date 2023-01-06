import './App.css';
import { Container } from 'react-bootstrap';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import CartScreen from './screens/CartScreen';

import LoginScreen from './screens/LoginScreen';
import UserListScreen from './screens/UserListScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';

import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import Footer from './components/Footer';
import ProductEditScreen from './screens/ProductEditScreen';









function App() {
  

  return (
    <div className="App">
          
          
          <main className="py-3">
            <Container>
                
                <Router>
                    <Header/>
                    <Routes>
                      <Route path='/' element={<HomeScreen/>} />
                      <Route path='/login' element={<LoginScreen/>} />
                      <Route path='/register' element={<RegisterScreen/>} />
                      <Route path='/profile' element={<ProfileScreen/>} />
                      <Route path='/shipping' element={<ShippingScreen/>} />
                      <Route path='/placeorder' element={<PlaceOrderScreen/>} />
                      <Route path='/order/:id' element={<OrderScreen/>} /> 
                      <Route path='/product/:id' element={<ProductScreen/>} />
                      <Route path='/cart/:id?' element={<CartScreen/>} />
                      <Route path='/admin/userlist' element={<UserListScreen/>} />
                      <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
                      
                      <Route path='/payment' element={<PaymentScreen/>} />
                      <Route path='/admin/productlist' element={<ProductListScreen/>} />
                      <Route path='admin/product/:id/edit' element={<ProductEditScreen/>} />
                      <Route path='/admin/orderlist' element={<OrderListScreen />} />
                      
                      

                    </Routes>
                    <Footer/>
              </Router>

            </Container>
          </main>
      
        
    </div>
  );
}

export default App;
