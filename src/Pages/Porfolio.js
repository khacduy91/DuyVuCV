import React from 'react';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import TopMenu from '../component/TopMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import Category from '../component/Category';
import Cart from '../component/Cart'
import {Row,Col,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'


class Porfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Container>
            <Row >
              <Col >
                <TopMenu />
              </Col>
            </Row>
            <Row  xs={1} md={3}  className={'grid-container'}>
              <Col md={3} className='leftCol'>
                <Category />
              </Col>
              <Col md={6} wider='true'><Switch>
                <Route exact path='/porfolio' component={ListPage} />
                <Route exact path='/login' component={AuthPage} />
                <Route exact path='/detail' component={DetailPage} />
              </Switch>
              </Col>
              <Col md={3}>
                <Cart />
              </Col>
            </Row>
          </Container>
        </Router>

      </React.Fragment >
    )
  }
}
export default Porfolio;
