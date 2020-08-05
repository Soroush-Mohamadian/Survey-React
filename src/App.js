import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import React from 'react';


export default function App() {
  return (
    <div id='root'>
      <Container>
        <Router>
          <div>
            <Row>
              <Col>
              <div className='startingPage'>
                <h2>فرم نظرسنجی وارتقا سطح خدمات رسانی </h2>
              </div>
              </Col>
            </Row>

            <Row>
            <Col>
              <img src='./assets/Tapsi_new_logo.png'></img>
              </Col>
            </Row>

            <Row>
            <Col>
            <div className="startBtnLink">
              <Link to="/">
                <button type="button" className="startBtn">شروع</button>
              </Link>
            </div>
            </Col>
            </Row>


            <Row>
            <Col>
            <h3>قدرت گرفته از</h3>
            </Col>

            <Col>

            </Col>
            </Row>

            <Row>
            <Col>
            <p>آنلاین CRM پلتفرم طراحی فرم های </p>
            </Col>
            </Row>



            <Switch>
              <Route path="/about">

              </Route>
              <Route path="/topics">

              </Route>
              <Route path="/">

              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
}
