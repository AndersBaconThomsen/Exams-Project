//React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//App
import App from './App';

//CMS
import AppCms from "./cms/AppCms"

//CSS
import './index.css'

ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/cms*" component={AppCms} />

        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

