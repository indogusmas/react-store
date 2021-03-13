import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from 'react-bootstrap';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductCategory from './pages/ProductCategory';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path="/product-detail">
            <ProductDetail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/product-category">
            <ProductCategory/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
