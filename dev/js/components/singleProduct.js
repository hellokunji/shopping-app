import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index'; 

class SingleProducts extends React.Component {
	componentDidMount() {
		//console.log(this.props.match.params.productId);
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
		const pId = this.props.match.params.productId;
		const products = this.props.products;
		const i = products.findIndex((product) => product.pId === pId);

		const product = products[i];


		let wishlist= this.props.wishlist;
		let WishButton;
		let wishIndex= wishlist.findIndex((curProduct)=> curProduct.pId===product.pId);
		if(wishIndex==-1){
			WishButton= (
				<button onClick={()=>this.handleAddWishlist(product)}>
					<img src="/live/media/heart.png"/>
					<span>Add to Wishlist</span>
				</button>
			)
		}
		else{
			WishButton= (
				<button onClick={()=>this.handleRemoveWishlist(wishIndex)}>
					<img src="/live/media/heart.png"/>
					<span>Remove from Wishlist</span>
				</button>
			)
		}
		return(
			<div className="singleProducts">
				<div className="spTag">
					<div className="sptImg">
						<img src={product.img}/>
					</div>
				</div>
				<div className="spDesc">
					<h2 className="spdTitle">{product.name}</h2>
					<p className="spdPrice">{"INR" + product.price}</p>
					<p className="spdDesc">
						{product.desc}
					</p>
					<div className="spdActions">
						<div>
							<button onClick={()=>this.handleAddCart(product)}>
								<img src="/live/media/shopping-cart.png"/>
								<span>Add to Cart</span>
							</button>
						</div>
						<div>
							{WishButton}
						</div>
					</div>
				</div>
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


const BindSingleProducts= connect(mapStateToProps, mapDispatchToProps)(SingleProducts);

export default BindSingleProducts;