import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import wishlist from './wishlist';


const rootReducer= combineReducers({products, cart, wishlist});

export default rootReducer;