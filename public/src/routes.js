/**
 * Created by rohitgirme on 3/11/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';

import FileListContainer from './containers/FileListContainer';

// Nested routing can be used for nested components and nested paths/urls
export default (
  <Route path='/' component={App}>
    <IndexRoute component={FileListContainer} />
  </Route>
);
