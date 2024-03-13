import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  // The Navbar UI component will render each of the elements

  //still need to add my resume and personal info for the links
  return (
    <Navigation
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          AboutMe
        </Link>,
        <Link key={2} className="nav-link text-light" to="/Contact">
          Contact
        </Link>,
        <Link key={2} className="nav-link text-light" to="/Portfolio">
        Portfolio
      </Link>,
      <Link key={2} className="nav-link text-light" to="/Resume">
      Resume
    </Link>,
      ]}
    />
  );
}