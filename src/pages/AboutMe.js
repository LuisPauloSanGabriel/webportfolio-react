import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AboutMe() {
  const certificates = [
    { title: "Frontend Development – Meta", year: "2024", link: "https://example.com/cert/meta-frontend" },
    { title: "React Advanced – Udemy", year: "2023", link: "https://example.com/cert/react-advanced" },
    { title: "JavaScript Mastery – Coursera", year: "2023", link: "https://example.com/cert/js-mastery" },
  ];

  const skills = ["React", "JavaScript", "Bootstrap", "HTML", "CSS", "Git", "REST APIs"];
 
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About Me</h1>

      {/* Bio Section */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>
            Hello! I'm <strong>[Your Name]</strong>, a passionate web developer with a focus on modern frontend technologies.
            I enjoy crafting clean, responsive user interfaces using tools like React and Bootstrap. I am constantly learning 
            and building projects that solve real-world problems and improve user experience.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Certificates Section */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>Certificates</Card.Title>
          <ListGroup variant="flush">
            {certificates.map((cert, index) => (
              <ListGroup.Item key={index}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.title}
                </a> — <small>{cert.year}</small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Skills Section */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>Skills</Card.Title>
          <div>
            {skills.map((skill, idx) => (
              <span key={idx} className="badge bg-primary me-2 mb-2">{skill}</span>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* Contact Section */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            Email: <a href="mailto:your.email@example.com">your.email@example.com</a> <br />
            LinkedIn: <a href="https://linkedin.com/in/your-profile" target="_blank">your-profile</a> <br />
            GitHub: <a href="https://github.com/yourusername" target="_blank">yourusername</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
