import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ProductScreen from './screens/ProductScreen';
import {  BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import NavDropdown from 'react-bootstrap/NavDropdown'
import ShippingAddressScreen from './screens/shippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
function App() {
  const { state, dispatch:ctxDispatch } =useContext(Store);
  const { cart,userInfo }  =state;
  const signoutHandler =()=>{
    ctxDispatch({type:'USER_SIGNOUT'})
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    
  }
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <ToastContainer position="bottom-center" limit={1}></ToastContainer>
      <header>
      <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems.length>0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              {userInfo ? (<NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider></NavDropdown.Divider>
                <Link className="dropdown-item" to="#signout"
                onClick={signoutHandler}>Sign Out</Link>
              </NavDropdown>
              ):(
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              )}

            </Nav>
            
          </Container>
        </Navbar>
        
      </header>
      <main>
        <Container className='mt-3'>
          <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/product/:slug" element={<ProductScreen></ProductScreen>}></Route>
          <Route path="/signin" element={<SigninScreen></SigninScreen>}></Route>
          <Route path="/signup" element={<SignupScreen></SignupScreen>}></Route>
          <Route path="/shipping" element={<ShippingAddressScreen></ShippingAddressScreen>}></Route>
          <Route path="/payment" element={<PaymentMethodScreen></PaymentMethodScreen>}></Route>
          <Route path="/cart" element={<CartScreen/>}></Route>
          <Route path="/order/:id" elemnt={<OrderScreen></OrderScreen>}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen></PlaceOrderScreen>}></Route>
          
          
          </Routes>
        </Container>
        
      </main>
      <footer>
        <div className='text-center'>All rights Reserved</div>
      </footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
