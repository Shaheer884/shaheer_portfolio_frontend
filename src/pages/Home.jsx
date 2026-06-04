import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Rocket, Users, Zap, Phone, MapPin, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillBadge from '../components/SkillBadge';
import ContactForm from '../components/ContactForm';
import avatarImg from '../assets/1190.jpg';

// Premium Seed Fallback Data (so the app looks incredibly professional immediately)
const MOCK_PROJECTS = [
  {
    _id: 'mock1',
    title: "AI-Based Quiz System",
    description: "🚀 Built an AI-Powered Quiz System using the MERN stack that generates MCQs instantly with AI, features a modern responsive UI, real-time scoring, secure authentication, and optimized backend performance.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'mock2',
    title: "Auction Bidding System",
    description: "Dynamic auction platform allowing users to create listings, place bids in real-time, and manage their auction activities.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'mock3',
    title: "Chat Application",
    description: "Real-time messaging application built with Kotlin for Android. Features include user authentication, message encryption, and push notifications.",
    tags: ["Kotlin", "Firebase", "Android SDK"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'mock4',
    title: "E-Commerce Website",
    description: "Full-featured online shopping platform with product catalog, shopping cart, user accounts, and secure payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'mock5',
    title: "Typing Speed Test System",
    description: "A real-time typing performance application that measures typing speed (WPM), accuracy, and error rate. Features include timer-based tests, performance tracking, leaderboard rankings, and detailed typing analytics to help users improve their typing skills.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  }
];

const MOCK_SKILLS = [
  { _id: 's1', name: 'React.js', category: 'Frontend', proficiency: 95 },
  { _id: 's2', name: 'Bootstrap / CSS', category: 'Frontend', proficiency: 90 },
  { _id: 's3', name: 'JavaScript ES6+', category: 'Frontend', proficiency: 90 },
  { _id: 's4', name: 'Node.js', category: 'Backend', proficiency: 85 },
  { _id: 's5', name: 'Express.js', category: 'Backend', proficiency: 88 },
  { _id: 's6', name: 'REST APIs', category: 'Backend', proficiency: 92 },
  { _id: 's7', name: 'MongoDB', category: 'Database', proficiency: 85 },
  { _id: 's8', name: 'Git & GitHub', category: 'Tools & Others', proficiency: 90 },
];

const MOCK_EXPERIENCES = [
  {
    _id: 'e1',
    role: "BS Computer Science",
    company: "University of Education Lahore, Jauharabad Campus",
    duration: "2022 – 2026",
    description: "Currently pursuing Bachelor's degree with focus on software development, algorithms, and modern technologies.",
    isEducation: true,
    current: true,
  },
  {
    _id: 'e2',
    role: "FSc Pre-Engineering",
    company: "Govt. Post Graduate College",
    duration: "2020 – 2022",
    description: "Completed intermediate education with strong foundation in Mathematics and Physics.",
    isEducation: true,
    current: false,
  },
  {
    _id: 'e3',
    role: "Matriculation",
    company: "Govt. Technical Model High School, Jauharabad",
    duration: "2018 – 2020",
    description: "Completed secondary education with excellent grades in Science subjects.",
    isEducation: true,
    current: false,
  },
];

const FEATURES = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient development process with quality results",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with strong communication skills",
  },
  {
    icon: Zap,
    title: "Modern Tech",
    description: "Always learning and adopting the latest technologies",
  },
];

const Home = () => {
  const projects = MOCK_PROJECTS;
  const skills = MOCK_SKILLS;
  const experiences = MOCK_EXPERIENCES;

  return (
    <div className="position-relative overflow-hidden">
      {/* Ambient glowing circles */}
      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>

      {/* Hero Section */}
      <section className="py-5 d-flex align-items-center position-relative" id="home" style={{ minHeight: '90vh' }}>
        <Container>
          <Row className="align-items-center">
            {/* Text Content Column */}
            <Col lg={7} className="text-start mb-5 mb-lg-0">
              <span className="badge border border-color text-secondary px-3 py-2 rounded-pill font-headings mb-3 small floating">
                Welcome to my portfolio
              </span>
              <h1 className="display-3 fw-extrabold mb-3 font-headings">
                Hi, I'm <span className="gradient-text">SHAHEER AHMAD</span>
              </h1>
              <h2 className="h2 fw-bold text-secondary mb-4 font-headings fs-4" style={{ letterSpacing: '0.5px' }}>
                MERN Stack Developer | Web Developer
              </h2>
              <p className="lead text-secondary mb-5" style={{ maxWidth: '600px', lineHeight: '1.8', fontSize: '1.08rem' }}>
                Passionate about building scalable, modern, and user-friendly web applications that make a difference.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <Button as={Link} to="/projects" className="btn-premium d-flex align-items-center gap-2 py-3 px-4">
                  View Projects <ArrowRight size={16} />
                </Button>
                <a href="#contact" className="btn-premium-outline d-flex align-items-center gap-2 text-decoration-none py-3 px-4">
                  Contact Me <Mail size={16} />
                </a>
              </div>

              {/* Social Links */}
              <div className="d-flex align-items-center gap-3 mt-5 pt-3 border-top border-color" style={{ maxWidth: '400px' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center border border-color rounded-circle text-secondary"
                  style={{ width: '44px', height: '44px', background: 'rgba(99, 102, 241, 0.04)', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shaheer-ahmad-54a695385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center border border-color rounded-circle text-secondary"
                  style={{ width: '44px', height: '44px', background: 'rgba(99, 102, 241, 0.04)', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </Col>

            {/* Visual Portrait Column with double orbits */}
            <Col lg={5} className="d-flex justify-content-center">
              <div className="position-relative" style={{ width: '320px', height: '320px' }}>
                {/* Orbital path overlays */}
                <div className="floating-orbit"></div>
                <div className="floating-orbit-2"></div>

                {/* 3D Morphing Sphere Avatar with Image background */}
                <div className="morphing-sphere w-100 h-100 position-relative">
                  <img
                    src={avatarImg}
                    alt="Shaheer Ahmad - MERN Stack Developer"
                    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                    style={{ borderRadius: 'inherit', pointerEvents: 'none' }}
                  />
                </div>
              </div>
            </Col>
          </Row>

          {/* Scroll Down Indicator */}
          <div className="position-absolute bottom-3 start-50 translate-middle-x d-none d-md-block bouncing" style={{ animation: 'bounce 2s infinite' }}>
            <a href="#about" className="text-secondary hover-accent transition-all">
              <ArrowDown size={22} />
            </a>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5 bg-premium-secondary border-y border-color" id="about">
        <Container>
          <div className="text-center mb-5">
            <span className="gradient-text font-headings fw-bold mb-2 text-uppercase tracking-wider small">Get To Know</span>
            <h2 className="display-5 fw-extrabold font-headings mb-3 mt-1">About Me</h2>
            <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px' }}></div>
          </div>

          <Row className="g-5 align-items-center">
            {/* About Text Column */}
            <Col lg={6} className="text-start">
              <p className="lead text-secondary leading-relaxed mb-4" style={{ fontSize: '1.08rem' }}>
                I'm a passionate <span className="gradient-text fw-bold">MERN Stack Developer</span> and
                Computer Science student with a strong foundation in building modern web applications.
                My journey in software development started with curiosity and has evolved into a
                full-fledged passion for creating impactful digital solutions.
              </p>
              <p className="lead text-secondary leading-relaxed mb-4" style={{ fontSize: '1.08rem' }}>
                I specialize in <span className="gradient-text fw-bold">React.js</span>,
                <span className="gradient-text fw-bold"> Node.js</span>, and the complete
                MERN stack ecosystem. I love turning complex problems into simple, beautiful,
                and intuitive solutions that users love.
              </p>
              <p className="lead text-secondary leading-relaxed mb-0" style={{ fontSize: '1.08rem' }}>
                Currently pursuing my BS in Computer Science at the <span className="gradient-text fw-bold">University of Education Lahore</span>,
                I'm constantly expanding my knowledge and taking on new challenges in the
                ever-evolving world of technology.
              </p>
            </Col>

            {/* Feature Cards Column */}
            <Col lg={6}>
              <Row className="g-4">
                {FEATURES.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Col xs={12} sm={6} key={feature.title}>
                      <div
                        className="glass-card h-100 p-4 text-start border border-color rounded-4 transition-all"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center mb-4 transition-all"
                          style={{
                            width: '48px',
                            height: '48px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: '12px'
                          }}
                        >
                          <Icon className="text-accent" size={24} />
                        </div>
                        <h3 className="font-headings fw-bold fs-5 mb-2 text-start">{feature.title}</h3>
                        <p className="text-secondary small mb-0 text-start" style={{ lineHeight: '1.5' }}>{feature.description}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-5" id="education">
        <Container>
          <div className="text-center mb-5">
            <span className="gradient-text font-headings fw-bold mb-2 text-uppercase tracking-wider small">My Journey</span>
            <h2 className="display-5 fw-extrabold font-headings mb-3 mt-1">Education</h2>
            <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px' }}></div>
          </div>

          <ExperienceTimeline experiences={experiences} />
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-premium-secondary border-y border-color" id="skills">
        <Container>
          <div className="text-center mb-5">
            <span className="gradient-text font-headings fw-bold mb-2 text-uppercase tracking-wider small">What I Know</span>
            <h2 className="display-5 fw-extrabold font-headings mb-3 mt-1">My Skills</h2>
            <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px' }}></div>
          </div>

          <SkillBadge skills={skills} />
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-5" id="projects">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
            <div className="text-start">
              <h2 className="display-5 fw-bold font-headings mb-2">Featured Projects</h2>
              <p className="text-secondary mb-0">A handpicked collection of my recent web implementations.</p>
            </div>
            <Button as={Link} to="/projects" className="btn-premium-outline mt-3 mt-md-0 d-flex align-items-center gap-2">
              All Projects <ArrowRight size={16} />
            </Button>
          </div>

          <Row className="g-4">
            {projects.map((project) => (
              <Col md={4} key={project._id}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-premium-secondary border-t border-color" id="contact">
        <Container>
          <div className="text-center mb-5">
            <span className="gradient-text font-headings fw-bold mb-2 text-uppercase tracking-wider small">Get In Touch</span>
            <h2 className="display-5 fw-extrabold font-headings mb-3 mt-1">Contact Me</h2>
            <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px' }}></div>
          </div>

          <Row className="g-5 align-items-center">
            {/* Contact Info Column */}
            <Col lg={5} className="text-start space-y-5">
              <div>
                <h3 className="font-headings fw-extrabold fs-3 mb-3">Let's Work Together</h3>
                <p className="text-secondary leading-relaxed small" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  I'm always excited to take on new projects and collaborate with amazing people.
                  Whether you have a project in mind or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="d-flex flex-column gap-4 my-4">
                {/* Email Item */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}
                  >
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0 fw-semibold" style={{ fontSize: '0.8rem' }}>Email</p>
                    <p className="mb-0 fw-bold" style={{ fontSize: '0.95rem' }}>ahmedshaheer421@gmail.com</p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}
                  >
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0 fw-semibold" style={{ fontSize: '0.8rem' }}>Phone</p>
                    <p className="mb-0 fw-bold" style={{ fontSize: '0.95rem' }}>+92 321 5253041</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}
                  >
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0 fw-semibold" style={{ fontSize: '0.8rem' }}>Location</p>
                    <p className="mb-0 fw-bold" style={{ fontSize: '0.95rem' }}>Gulberg 3 Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Glass Links */}
              <div className="d-flex gap-3 pt-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center border border-color rounded-4 hover-accent transition-all text-secondary"
                  style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.04)', backdropFilter: 'blur(4px)', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shaheer-ahmad-54a695385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center border border-color rounded-4 hover-accent transition-all text-secondary"
                  style={{ width: '48px', height: '48px', background: 'rgba(99, 102, 241, 0.04)', backdropFilter: 'blur(4px)', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </Col>

            {/* Contact Form Column */}
            <Col lg={7}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
