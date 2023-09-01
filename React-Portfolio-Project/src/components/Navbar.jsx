import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: 'white',
    listStyle: 'none',
    padding: '20px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '600',
    padding: '20px 20px',
    fontSize: '18px'
  
  };
 
  return (
    <div  style={navStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/Projects" style={linkStyle}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Contact" style={linkStyle}>
            Contact
          </Link>
        </li>
    </div>
  );
}

export default Navbar;
