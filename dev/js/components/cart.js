import React from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class Cart extends React.Component {
	handleRemoveCart(index){
		this.props.removeCart(index);
	}
	render(){
		let cart = this.props.cart;
		let i = 0;
		let len= cart.length;
		let List= [];
		for(i ; i<len ; i++){
			let index= i;
			List.push(
				<div key={cart[i].pId} className="cl_item">
					<Link to={"/products/" + cart[i].pId}>
						<div className="cli_img">
							<img src={cart[i].img}/>
						</div>
						<div className="cli_desc">
							<h4>{cart[i].name}</h4>
							<p>{"INR " + cart[i].price}</p>
							<p>{"Qty: " + cart[i].qty}</p>
						</div>
					</Link>
					<div className="cli_actions">
						<button onClick={()=>this.handleRemoveCart(index)}>Remove</button>
					</div>
				</div>
			)
		}
		return(
			<div className="cart">
				<h3>Cart</h3>
				<div className="cList">
					{List}
				</div>
			</div>
		)
	}
}


function mapStateToProps(state){
	return{
		cart: state.cart
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}


const BindCart= connect(mapStateToProps, mapDispatchToProps)(Cart);


export default BindCart;