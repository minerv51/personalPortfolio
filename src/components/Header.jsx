import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css'

function Header() {
  const location = useLocation();
  
  const getLinkStyle = (path) => {
    return location.pathname === path ? { color: '#AC8205', textDecoration: 'underline', textUnderlineOffset: '1dvh' } : { color: '#1B2A41' };
  };

  return (
  <div className='header'>
    <h3 className='nav-name'>
      <Link to="/" role='button'>Ben Anthony Minervino</Link>
    </h3>
    <ul className='nav-menu'>
      <li> <Link to="/" style={getLinkStyle('/')} role='button'>Home</Link> </li>
      <li> <Link to="/about" style={getLinkStyle('/about')} role='button'>About Me</Link> </li>
      <li> <Link to="/resume" style={getLinkStyle('/resume')} role='button'>Resume</Link> </li>
      <li> <Link to="/projects" style={getLinkStyle('/projects')} role='button'>Projects</Link> </li>
      <li> <Link to="/contact" style={getLinkStyle('/contact')} role='button'>Contact</Link> </li>
    </ul>
  </div>
  )
}

export default Header
