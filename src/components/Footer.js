import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => (
  <Container>
    <Row>
      <Col sm={12}>
        <div className="footer">
          <hr />
          <p> All Rights Reseverved. &copy; {new Date().getFullYear()}</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Footer;
