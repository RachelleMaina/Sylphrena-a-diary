import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const BreadCrumbs = () => (
  <div className="breadcrumb-wrapper">
    <Container>
      <Row>
        <Col sm={12}>
          <div className="breadcrumb">
            <span className="mr-auto">
              <i className="fa fa-sort-amount-desc"></i> ALL ENTRIES
            </span>
            <span className="ml-auto">
              <i className="fa fa-list-ol"></i> 1 OF 1
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BreadCrumbs;
