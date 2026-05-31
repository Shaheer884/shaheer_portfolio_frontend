import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SKILLS_LIST = [
  { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
  { name: "React JS", level: 80, color: "from-cyan-400 to-blue-500" },
  { name: "React Native", level: 70, color: "from-blue-400 to-purple-500" },
  { name: "MERN Stack", level: 80, color: "from-green-400 to-emerald-500" },
  { name: "C++", level: 90, color: "from-blue-600 to-indigo-600" },
  { name: "Kotlin", level: 70, color: "from-purple-500 to-pink-500" },
  { name: "PHP", level: 80, color: "from-indigo-500 to-purple-600" },
];

const FAMILIAR_TAGS = [
  "MongoDB", "Node.js", "Express.js", "Firebase", "Laravel", "Mysql", "Python", "Expo", "Machine Learning", "REST APIs", "Tailwind CSS", "Bootstrap", "Git", "GitHub",
];

const getGradientStyle = (colorStr) => {
  switch (colorStr) {
    case "from-orange-500 to-red-500": return "linear-gradient(90deg, #f97316, #ef4444)";
    case "from-blue-500 to-cyan-500": return "linear-gradient(90deg, #3b82f6, #06b6d4)";
    case "from-yellow-400 to-orange-500": return "linear-gradient(90deg, #facc15, #f97316)";
    case "from-cyan-400 to-blue-500": return "linear-gradient(90deg, #22d3ee, #3b82f6)";
    case "from-blue-400 to-purple-500": return "linear-gradient(90deg, #60a5fa, #a855f7)";
    case "from-green-400 to-emerald-500": return "linear-gradient(90deg, #4ade80, #10b981)";
    case "from-blue-600 to-indigo-600": return "linear-gradient(90deg, #2563eb, #4f46e5)";
    case "from-purple-500 to-pink-500": return "linear-gradient(90deg, #a855f7, #ec4899)";
    case "from-indigo-500 to-purple-600": return "linear-gradient(90deg, #6366f1, #9333ea)";
    default: return "var(--accent-gradient)";
  }
};

const SkillBadge = () => {
  return (
    <div className="max-w-4xl mx-auto py-2">
      <Row className="g-4 text-start">
        {SKILLS_LIST.map((skill, index) => (
          <Col md={6} key={skill.name} className="mb-2">
            <div className="space-y-3" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h3 className="font-headings fw-bold fs-6 mb-0 text-secondary">{skill.name}</h3>
                <span className="gradient-text fw-extrabold small" style={{ fontSize: '0.9rem' }}>{skill.level}%</span>
              </div>
              <div className="progress-bar-container" style={{ height: '10px' }}>
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: getGradientStyle(skill.color),
                    boxShadow: '0 0 10px rgba(99, 102, 241, 0.25)'
                  }}
                ></div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Additional Skills Tags */}
      <div className="mt-5 pt-4 text-center">
        <p className="text-secondary fw-semibold mb-4" style={{ fontSize: '1.05rem' }}>Also familiar with:</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {FAMILIAR_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 border border-color rounded-pill text-secondary small fw-semibold"
              style={{
                background: 'rgba(99, 102, 241, 0.04)',
                backdropFilter: 'blur(6px)',
                cursor: 'default',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 8px 20px -5px rgba(99, 102, 241, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;
