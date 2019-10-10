import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const AddButton = () => (
  <Row>
    <Col sm={{ span: 2, offset: 10 }}>
      <Button className="add-button">+</Button>
    </Col>
  </Row>
);
export default AddButton;
