import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {

  const iconStyle = {
    fontSize: '50px',
    color: '#8CBCFF',
    transition: 'color 0.5s ease',
    margin: '0 70px', // Margin on each side
    cursor: 'pointer', // Show cursor pointer on hover
  };

  const iconHoverStyle = {
    color: 'white', // Color on hover
  };

  const footerStyles = {
    bottom: '0',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center', // Center icons horizontally
    alignItems: 'center', // Center icons vertically
    padding: '40px',
    width: '100%',
  };
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div style={footerStyles}>
        <a href="https://www.instagram.com/jordan___lopez/">
            <FaInstagram
                style={hoveredIcon === 'Instagram' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                onMouseEnter={() => setHoveredIcon('Instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
            />
        </a>

        <a href="https://www.linkedin.com/in/jordanlopez123/">
            <FaLinkedinIn
                style={hoveredIcon === 'LinkedIn' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                onMouseEnter={() => setHoveredIcon('LinkedIn')}
                onMouseLeave={() => setHoveredIcon(null)}
            />
        </a>
        <a href="https://github.com/Lopez-Jordan">
            <FaGithub
                style={hoveredIcon === 'Github' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                onMouseEnter={() => setHoveredIcon('Github')}
                onMouseLeave={() => setHoveredIcon(null)}
            />
        </a>
    </div>
  );
}
