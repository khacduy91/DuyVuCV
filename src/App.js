import React from 'react';
import HomePage from './Pages/HomePage';
import TopMenu from './component/TopMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Row,Col,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Porfolio from './Pages/Porfolio';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
              <Switch>
                <Route exact path='/DuyProject' component={Porfolio} />
                <Route path='/' component={HomePage} />
              </Switch>
        </Router>

      </React.Fragment >
    )
  }
}
export default App;
