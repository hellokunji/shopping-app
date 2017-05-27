import React from 'react';
import { Route, Link } from 'react-router-dom';

//Import Components
import Header from './header';
import Products from './products';
import SingleProduct from './singleProduct';
import Cart from './cart';
import Wishlist from './wishlist';

class App extends React.Component {
	render(){
		return(
			<div className="mainApp">
				<Header/>

				<div className="main">
					<Route exact path="/" component={Products}/>
					<Route exact path="/products" component={Products}/>
					<Route path="/products/:productId" component={SingleProduct}/>
					<Route path="/cart" component={Cart}/>
					<Route path="/wishlist" component={Wishlist}/>
				</div>
			</div>
		)
	}
}

export default App;