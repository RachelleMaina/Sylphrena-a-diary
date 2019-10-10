import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Truncate from 'react-truncate';
import dateConverter from '../utils/dateConverter';
import Loading from '../components/Loading';

const EntryListing = ({ data }) =>
  data ? (
    data.map(entry => (
      <div>
        <Row>
          <Col sm={12}>
            <Card className="entry-listing-card">
              <Card.Body>
                <Row>
                  <Col sm={2}>
                    <div className="entry-emoji">
                      <span className="emoji" aria-hidden="true" role="img">
                        🤫
                      </span>
                    </div>
                  </Col>
                  <Col sm={10}>
                    <Card.Title>
                      {' '}
                      <span className="date-description" key={entry._id}>
                        {dateConverter(entry.createdAt).day}{' '}
                        {dateConverter(entry.createdAt).date}
                        {', '}
                        {dateConverter(entry.createdAt).time}
                      </span>
                    </Card.Title>
                    <Card.Text
                      className="entry-listing-content"
                      key={entry._id}
                    >
                      <Truncate lines={2} ellipsis={<big>...</big>}>
                        {entry.content}
                      </Truncate>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    ))
  ) : (
    <Loading />
  );
export default EntryListing;
