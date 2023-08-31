// At the top of this file, we are bringing in two more dependencies from react-router-dom.
// import { Link, useLocation } from 'react-router-dom';

import { Link} from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">
          About Me
        </Link>
      </li>
      <li>
        <Link to="/Projects">
            Projects
        </Link>
      </li>
      <li>
        <Link to="/Contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;