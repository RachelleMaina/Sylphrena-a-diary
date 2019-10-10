import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import BreadCrumbs from './components/BreadCrumbs';
import HomeView from './containers/HomeView';
import AddEntryView from './containers/AddEntryView';

const App = () => {
  return (
    <>
      <NavMenu />
      <BreadCrumbs />
      <Router>
        <Container>
          <Row>
            <Col sm={12}>
              <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/entry" component={AddEntryView} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
      <Footer />
    </>
  );
};

export default App;
