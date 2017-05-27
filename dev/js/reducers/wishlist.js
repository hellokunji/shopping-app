function wishlist(state= [], action){
	switch(action.type){
		case 'ADD_WISHLIST':
			return [
				...state,
				{
					"pId":action.pId, "name":action.name, "price":action.price, "img":action.img
				}
			]
			break;
		case 'REMOVE_WISHLIST':
			return [
				...state.slice(0, action.index), ...state.slice(action.index + 1)
			]
			break;
		default:
			//console.log(state);
			return state;

	}
}

export default wishlist;