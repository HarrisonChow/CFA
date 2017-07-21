import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home.jsx';

require('./styles/styles.css');
require('./index.html');

render(<Home />, document.getElementById('content'));
