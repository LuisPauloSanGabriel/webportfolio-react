import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer id="footer" className="text-center py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <h4 className="mb-0">Luis Paulo San Gabriel</h4>
          </Col>
          <Col xs={12} md={4}>
            <span>&copy; Copyright 2024</span>
          </Col>
          <Col xs={12} md={4}>
            <span>All rights reserved</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
