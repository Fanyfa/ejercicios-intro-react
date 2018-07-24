import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import MediaCard from './components/MediaCard';
import MediaList from './components/MediaList';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MediaList />, document.getElementById('root'));
registerServiceWorker();
