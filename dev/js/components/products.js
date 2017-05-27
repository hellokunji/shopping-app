import React from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index'; 

class Products extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.handleAddCart = this.handleAddCart.bind(this);////////
	}
	handleAddCart(cur_obj){
		this.props.addCart(cur_obj.pId, cur_obj.name, cur_obj.price, cur_obj.img);
	}
	handleAddWishlist(cur_obj){
		this.props.addWishlist(cur_obj.pId, cur_obj.name, cur_obj.price, cur_obj.img);
	}
	handleRemoveWishlist(index){
		this.props.removeWishlist(index);
	}
	render(){
		var list= this.props.products;//
		var ItemList= [];
		var i=0;
		var l_length= list.length;
		var cur_obj;
		for(i; i < l_length; i++){
			let cur_obj= list[i];

			let wishlist= this.props.wishlist;
			let WishButton;
			let wishIndex= wishlist.findIndex((curProduct)=> curProduct.pId===list[i].pId);
			if(wishIndex==-1){
				WishButton= (
				<button onClick={()=>this.handleAddWishlist(cur_obj)}>
					<img src="/live/media/heart.png"/>
				</button>
				)
			}
			else{
				WishButton= (
				<button onClick={()=>this.handleRemoveWishlist(wishIndex)}>
					<img src="/live/media/heart-active.png"/>
				</button>
				)
			}
			ItemList.push(
				<div key={list[i].pId} className="pItem">
					<div>
						<Link to={"/products/" + list[i].pId}>
							<div className="piImg">
								<img src={list[i].img}/>
							</div>
							<div className="piDesc">
								<div className="pidLeft">
									<h3>{list[i].name}</h3>
									<p>{"INR " + list[i].price}</p>
								</div>
							</div>
						</Link>
						<div className="piActions">
							<button onClick={()=>this.handleAddCart(cur_obj)}>
								<img src="/live/media/shopping-cart.png"/>
							</button>
							{WishButton}
						</div>
					</div>
				</div>
			)
		}
		return(
			<div className="products">
				{ ItemList }
			</div>
		)
	}
}


function mapStateToProps(state){
	return{
		products: state.products,
		wishlist: state.wishlist
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}


const BindProducts= connect(mapStateToProps, mapDispatchToProps)(Products);


export default BindProducts;