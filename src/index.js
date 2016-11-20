import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import ValueList from './components/ValueList';
import Stories from './components/Stories';
import Story from './components/Story';
import NewStory from './components/NewStory';

const htmlroot = document.getElementById('root')

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
        <IndexRoute component={ValueList}></IndexRoute>
        </Route>
        <Route path='stories/:storiesid' component={Stories}></Route>
        <Route path='stories/:storiesid/:storyid' component={Story}></Route>
        <Route path='newstory' component={NewStory}></Route>
    </Router>,
  htmlroot
);
