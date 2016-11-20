import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Stories from './components/Stories';
import Story from './components/Story';
import NewStory from './components/NewStory';
import ValueList from './components/ValueList';

const htmlroot = document.getElementById('root')

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
        	<IndexRoute component={HomePage}></IndexRoute>
        	<Route path='stories/:storiesid' component={Stories}></Route>
        	<Route path='stories/:storiesid/:storyid' component={Story}></Route>
        	<Route path='newstory/:valueId' component={NewStory}></Route>
        	<Route path='values' component={ValueList}></Route>
        </Route>
    </Router>,
  htmlroot
);
