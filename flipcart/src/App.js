import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//component
import Header from './component/header/Header'
import Home from './component/home/Home'
import { Templateprovider } from './template/Templateprovider'
import Contextprovider from './component/context/Contextprovider'
import ProductDetail from './component/productdetail/ProductDetail';
import Cart from './component/cart/Cart'

function App() {
  return (
    <Templateprovider>
      <Contextprovider>
        <BrowserRouter className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:id' component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </Contextprovider>
    </Templateprovider>
  );
}

export default App;
