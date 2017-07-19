import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home.jsx';

require('./styles/styles.css');
require('./styles/animation.css');
require('./styles/cfaiconlibrary-codes.css');
require('./styles/cfaiconlibrary-embedded.css');
require('./styles/cfaiconlibrary-ie7-codes.css');
require('./styles/cfaiconlibrary-ie7.css');
require('./styles/cfaiconlibrary.css');
require('./images/placeholder.gif');
require('./images/plus.png');
require('./images/plus-grey.png');
require('./index.html');

render(<Home />, document.getElementById('content'));
