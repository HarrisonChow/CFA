import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home.jsx';

require('./styles/styles.css');
require('./images/placeholder.gif');
require('./index.html');

render(<Home />, document.getElementById('content'));
