import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

const Loading = () => (
  <Row>
    <Col sm={{ span: 4, offset: 4 }}>
      <Spinner animation="border" role="status" className="loading-spinner">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Col>
  </Row>
);
export default Loading;
