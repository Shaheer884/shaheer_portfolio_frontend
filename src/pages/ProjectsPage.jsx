import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { Search } from 'lucide-react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

// Fallback seed projects in case DB yields empty or error
const SEED_PROJECTS = [
  {
    _id: 'p1',
    title: "AI-Based Quiz System",
    description: "🚀 Built an AI-Powered Quiz System using the MERN stack that generates MCQs instantly with AI, features a modern responsive UI, real-time scoring, secure authentication, and optimized backend performance.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'p2',
    title: "Auction Bidding System",
    description: "Dynamic auction platform allowing users to create listings, place bids in real-time, and manage their auction activities.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'p3',
    title: "Chat Application",
    description: "Real-time messaging application built with Kotlin for Android. Features include user authentication, message encryption, and push notifications.",
    tags: ["Kotlin", "Firebase", "Android SDK"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'p4',
    title: "E-Commerce Website",
    description: "Full-featured online shopping platform with product catalog, shopping cart, user accounts, and secure payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  },
  {
    _id: 'p5',
    title: "Typing Speed Test System",
    description: "A real-time typing performance application that measures typing speed (WPM), accuracy, and error rate. Features include timer-based tests, performance tracking, leaderboard rankings, and detailed typing analytics to help users improve their typing skills.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    featured: true,
    githubLink: "https://github.com",
    liveLink: "https://demo.com"
  }
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/projects');
        if (res.data.success && res.data.data.length > 0) {
          setProjects(res.data.data);
        } else {
          setProjects(SEED_PROJECTS);
        }
      } catch (error) {
        console.error('API Error, using premium seed projects:', error);
        setProjects(SEED_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Extract all unique tags
  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];

  // Filter projects by search and tags
  const filteredProjects = projects.filter((project) => {
    const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <div className="py-5 position-relative overflow-hidden" style={{ minHeight: '85vh' }}>
      <div className="ambient-glow ambient-glow-2"></div>

      <Container>
        <div className="text-start mb-5">
          <h1 className="display-4 fw-extrabold font-headings mb-2">My Creative <span className="gradient-text">Portfolio</span></h1>
          <p className="text-secondary mb-0 lead">
            A comprehensive visual index of my code architectures, design patterns, and deployed implementations.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="glass-card mb-5 p-4 border-0">
          <Row className="g-3 align-items-center justify-content-between">
            <Col lg={5}>
              <div className="position-relative d-flex align-items-center">
                <Search size={18} className="text-secondary position-absolute ms-3" />
                <Form.Control
                  type="text"
                  placeholder="Search projects by name or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="custom-input shadow-none ps-5 w-100"
                />
              </div>
            </Col>

            <Col lg={7} className="d-flex flex-wrap justify-content-lg-end gap-2 mt-3 mt-lg-0">
              {allTags.slice(0, 7).map((tag) => (
                <Button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`small py-2 px-3 border-0 font-headings rounded-3 ${selectedTag === tag ? 'btn-premium' : 'btn-premium-outline'
                    }`}
                  style={{ fontSize: '0.85rem', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                >
                  {tag}
                </Button>
              ))}
            </Col>
          </Row>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-5 text-secondary">
            No projects matches your criteria. Try adjusting filters or your search term!
          </div>
        ) : (
          <Row className="g-4">
            {filteredProjects.map((project) => (
              <Col md={6} lg={4} key={project._id}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProjectsPage;
