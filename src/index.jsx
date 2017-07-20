import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home.jsx';

require('./styles/styles.css');
require('./styles/cfg-icon-library-codes.css');
require('./styles/cfg-icon-library-embedded.css');
require('./styles/cfg-icon-library-ie7-codes.css');
require('./styles/cfg-icon-library-ie7.css');
require('./styles/cfg-icon-library.css');
require('./images/placeholder.gif');
require('./images/Quote.svg');
require('./index.html');

render(<Home />, document.getElementById('content'));
