import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars, FaTimes, FaHeart } from "react-icons/fa"
import "./header.css"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="brand-link">
            <FaHeart className="brand-icon" />
            <span className="brand-text">{siteTitle}</span>
          </Link>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/programs" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Our Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/volunteer" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Volunteer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/donate" className="btn btn-donate">
            Donate Now
          </Link>
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Hope Foundation`,
}

export default Header
