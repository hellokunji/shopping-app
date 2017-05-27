import React from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class Wishlist extends React.Component {
	handleRemoveWishlist(index){
		this.props.removeWishlist(index);
	}
	render(){
		let wishlist = this.props.wishlist;
		let i = 0;
		let len= wishlist.length;
		let List= [];
		for(i ; i<len ; i++){
			let index= i;
			List.push(
				<div key={wishlist[i].pId} className="cl_item">
					<Link to={"/products/" + wishlist[i].pId}>
						<div className="cli_img">
							<img src={wishlist[i].img}/>
						</div>
						<div className="cli_desc">
							<h4>{wishlist[i].name}</h4>
							<p>{"INR " + wishlist[i].price}</p>
						</div>
					</Link>
					<div className="cli_actions">
						<button onClick={()=>this.handleRemoveWishlist(index)}>Remove</button>
					</div>
				</div>
			)
		}
		return(
			<div className="cart">
				<h3>Wishlist</h3>
				<div className="cList">
					{List}
				</div>
			</div>
		)
	}
}


function mapStateToProps(state){
	return{
		wishlist: state.wishlist
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}


const BindWishlist= connect(mapStateToProps, mapDispatchToProps)(Wishlist);


export default BindWishlist;