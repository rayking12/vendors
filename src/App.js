import React from 'react';
import './App.css';
import Header from './component/Home-page/vendors';
import HomePage from './component/vendor-homepage/vendor-homepage';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from  'react-router-dom';
import Home from '../src/component/Home/home';
import ProductUpload from '../src/component/Uploads/productUpload';
import Regpage from './component/Registration-page/Reg-page';
import myProducts from './component/myProducts/myProducts'


const  Vendor = () => {
  return (
    <>
    <Header />
    <Router>
      <div>
      <Switch>
      <Route path='/' exact component={Regpage} />
      <Route path='/home' exact component={Home} />
      <Route path='/productUpload' exact component={ProductUpload} />
      <Route path='myProducts' exact component={myProducts}/>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default withRouter(Vendor);
