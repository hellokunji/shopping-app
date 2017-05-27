import React from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index'; 

class Header extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return(
			<header>
				<div className="hLogo">
					<Link to="/"> Shopping App </Link>
				</div>
				<div className="hRight">
					<Link to="/cart">
						<img src="/live/media/shopping-cart.png"/>
						<span>{"(" + this.props.cart.length + ")"}</span>
					</Link>
					<Link to="/wishlist">
						<img src="/live/media/heart.png"/>
						<span>{"(" + this.props.wishlist.length + ")"}</span>
					</Link>
				</div>
			</header>
		)
	}
}


function mapStateToProps(state){
	return{
		cart: state.cart,
		wishlist: state.wishlist
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}


const BindHeader= connect(mapStateToProps, mapDispatchToProps)(Header);

export default BindHeader;