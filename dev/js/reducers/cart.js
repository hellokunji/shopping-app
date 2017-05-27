function cart(state= [], action){
	switch(action.type){
		case 'ADD_CART':
			var getIndex= state.findIndex((product)=>  product.pId===action.pId)
			if(getIndex==-1){
				return [
					...state,
					{
						"pId":action.pId, "name":action.name, "price":action.price, "img":action.img, "qty": 1
					}
				]
			}
			else{
				var getState= state;
				getState[getIndex].qty+=1;
				state= getState;
				return [
					...state
				]
			}
			break;
		case 'REMOVE_CART':
			return [
				...state.slice(0, action.index), ...state.slice(action.index + 1)
			]
			break;
		default:
			//console.log(state);
			return state;

	}
}

export default cart;