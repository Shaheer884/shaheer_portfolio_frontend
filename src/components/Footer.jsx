import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section py-5 mt-auto">
      <Container>
        <Row className="align-items-center justify-content-between text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-0">
            <h5 className="font-headings fw-bold mb-1">Shaheer Portfolio</h5>
            <p className="text-secondary small mb-0">
              © {new Date().getFullYear()} Shaheer. Built with premium MERN stack & Bootstrap. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center justify-content-md-end align-items-center gap-4">
            <div className="d-flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover-accent"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

            </div>
            
            <button
              onClick={scrollToTop}
              className="theme-toggle-btn border border-color"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
