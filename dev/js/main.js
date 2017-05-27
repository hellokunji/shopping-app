//Import React
import React from 'react';
import { render } from 'react-dom';

//Import Components
import App from './components/app';

//Import React Router
import { BrowserRouter as Router } from 'react-router-dom';

//import css
require('../scss/main.scss');

import { Provider } from 'react-redux';
import store from './store';

const router = (
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>
)
//

render(router, document.getElementById('root')); 