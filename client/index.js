import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import NotFound from './components/NotFound';

render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ App } />
      <Route path="*" component={ NotFound }/>
    </Route>
  </Router>,
  document.getElementById('react-root')
);

