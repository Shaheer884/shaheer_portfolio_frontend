import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { ExternalLink, Github, Building2, Gavel, MessageSquare, ShoppingCart, FolderGit2 } from 'lucide-react';

// Import local project assets dynamically
import quizImg from '../assets/quiz.jpeg';
import auctionImg from '../assets/auction.jpeg';
import chatImg from '../assets/chat.png';
import ecommerceImg from '../assets/e-commerce.jpeg';
import typingImg from '../assets/typing.jpeg';

const getProjectMeta = (project) => {
  const titleLower = project.title?.toLowerCase() || '';
  if (titleLower.includes('quiz') || titleLower.includes('ai') || project.iconName === 'Building2') {
    return {
      Icon: Building2,
      gradient: "linear-gradient(135deg, #10b981, #059669)", // green-to-emerald
      image: quizImg,
    };
  }
  if (titleLower.includes('auction') || titleLower.includes('bid') || project.iconName === 'Gavel') {
    return {
      Icon: Gavel,
      gradient: "linear-gradient(135deg, #f97316, #ef4444)", // orange-to-red
      image: auctionImg,
    };
  }
  if (titleLower.includes('chat') || titleLower.includes('message') || project.iconName === 'MessageSquare') {
    return {
      Icon: MessageSquare,
      gradient: "linear-gradient(135deg, #a855f7, #ec4899)", // purple-to-pink
      image: chatImg,
    };
  }
  if (titleLower.includes('commerce') || titleLower.includes('shop') || project.iconName === 'ShoppingCart') {
    return {
      Icon: ShoppingCart,
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)", // cyan-to-blue
      image: ecommerceImg,
    };
  }
  if (titleLower.includes('typing') || titleLower.includes('speed')) {
    return {
      Icon: FolderGit2,
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", // indigo-to-purple
      image: typingImg,
    };
  }
  return {
    Icon: FolderGit2,
    gradient: "var(--accent-gradient)",
    image: null,
  };
};

const ProjectCard = ({ project }) => {
  const { title, description, tags, liveLink, githubLink } = project;
  const { Icon, gradient, image } = getProjectMeta(project);

  return (
    <Card className="glass-card h-100 border-0 text-start d-flex flex-column p-0 overflow-hidden group">
      <div 
        className="position-relative d-flex align-items-center justify-content-center overflow-hidden" 
        style={{ 
          height: '200px',
          background: image ? 'none' : gradient,
          transition: 'all 0.5s ease'
        }}
      >
        {/* Backdrop glass blur layer */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-0 group-hover-opacity" 
          style={{ 
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(3px)',
            transition: 'opacity 0.4s ease',
            zIndex: 2
          }}
        />
        
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-100 h-100 object-fit-cover transition-all"
            style={{ 
              zIndex: 1,
            }}
          />
        ) : (
          /* Lucide Vector Icon */
          <Icon 
            size={72} 
            className="text-white opacity-90 transition-all" 
            style={{ zIndex: 2 }}
          />
        )}
      </div>

      <Card.Body className="p-4 d-flex flex-column flex-grow-1">
        <h4 className="card-title fw-bold mb-2 text-truncate font-headings">{title}</h4>
        
        <Card.Text className="text-secondary small mb-4 flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </Card.Text>

        <div className="mb-4 d-flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              bg="none"
              className="border border-color px-2 py-1 font-primary fw-semibold text-secondary"
              style={{ 
                background: 'rgba(99, 102, 241, 0.04)', 
                backdropFilter: 'blur(4px)', 
                fontSize: '0.75rem',
                letterSpacing: '0.2px'
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="d-flex align-items-center gap-3 mt-auto pt-3 border-top border-color">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium py-2 px-3 d-flex align-items-center gap-1 text-decoration-none small"
              style={{ fontSize: '0.85rem' }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-outline py-2 px-3 d-flex align-items-center gap-1 text-decoration-none small"
              style={{ fontSize: '0.85rem' }}
            >
              <Github size={13} /> Source
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
