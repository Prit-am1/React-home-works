import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <header>
      <nav>
        {!isLoggedIn && (
          <>
            <Link to="/">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
