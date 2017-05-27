import { createStore } from 'redux';

import rootReducer from './reducers/index';
import products from './data/products';
import cart from './data/cart';
import wishlist from './data/wishlist';
const defaultState= {
	products,
	cart,
	wishlist
}


const store= createStore(rootReducer, defaultState);


export default store;