import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import reviews1 from '../assets/reviews/Sir_JethroReview.jpg'
import reviews2 from '../assets/reviews/Sir_EltonReview.jpg'
import reviews3 from '../assets/reviews/Sir_DasReview.jpg'
import reviews4 from '../assets/reviews/Sir_MiguelReview.jpg'

export default function ExperienceAndReviews() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="stats" className="py-5" ref={ref}>
      <Container className="text-center">
        {/* ===== Experience Stats ===== */}
        <Row className="justify-content-center mb-5">
          <Col md={4}>
            <h2 className="fw-bold text-success">
              {inView && <CountUp end={1} duration={2} />}+
            </h2>
            <p>Year as a Web Developer</p>
          </Col>
          <Col md={4}>
            <h2 className="fw-bold text-success">
              {inView && <CountUp end={3} duration={2} />}+
            </h2>
            <p>Years as an IT Instructor</p>
          </Col>
          <Col md={4}>
            <h2 className="fw-bold text-success">
              {inView && <CountUp end={500} duration={2.5} />}+
            </h2>
            <p>Students Trained</p>
          </Col>
        </Row>

        {/* ===== Student Reviews Carousel ===== */}
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="fw-bold mb-4 text-success" id="exp-stats-heading">Real Experiences. <span className="highlight">Real Growth.</span></h2>
            <Carousel interval={3000} fade indicators={false}>
              <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={reviews1} alt="Student Review 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={reviews2} alt="Student Review 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={reviews3} alt="Student Review 3" />
              </Carousel.Item>
{/*              <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={reviews4} alt="Student Review 4" />
              </Carousel.Item>*/}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
