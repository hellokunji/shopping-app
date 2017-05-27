//ADD TO CART
export function addCart(pId, name, price, img){
	return{
		type: 'ADD_CART',
		pId,
		name,
		price,
		img
	}
}

//REMOVE FROM CART
export function removeCart(index){
	return{
		type: 'REMOVE_CART',
		index
	}
}

//ADD TO CART
export function addWishlist(pId, name, price, img){
	return{
		type: 'ADD_WISHLIST',
		pId,
		name,
		price,
		img
	}
}

//REMOVE FROM CART
export function removeWishlist(index){
	return{
		type: 'REMOVE_WISHLIST',
		index
	}
}