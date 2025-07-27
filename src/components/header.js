import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars, FaTimes, FaHeart, FaHome, FaInfoCircle, FaProjectDiagram, FaCalendarAlt, FaHandsHelping, FaEnvelope } from "react-icons/fa"
import "./header.css"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        {/* Brand/Logo */}
        <div className="header-brand">
          <Link to="/" className="brand-link" onClick={closeMenu}>
            <FaHeart className="brand-icon" />
            <span className="brand-text">{siteTitle}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaHome className="nav-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <FaInfoCircle className="nav-icon" />
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/programs" className="nav-link">
                <FaProjectDiagram className="nav-icon" />
                <span>Programs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">
                <FaCalendarAlt className="nav-icon" />
                <span>Events</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/volunteer" className="nav-link">
                <FaHandsHelping className="nav-icon" />
                <span>Volunteer</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <FaEnvelope className="nav-icon" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Header Actions */}
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

      {/* Mobile Navigation Overlay */}
      <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
                <FaHome className="mobile-nav-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
                <FaInfoCircle className="mobile-nav-icon" />
                <span>About Us</span>
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/programs" className="mobile-nav-link" onClick={closeMenu}>
                <FaProjectDiagram className="mobile-nav-icon" />
                <span>Our Programs</span>
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/events" className="mobile-nav-link" onClick={closeMenu}>
                <FaCalendarAlt className="mobile-nav-icon" />
                <span>Events</span>
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/volunteer" className="mobile-nav-link" onClick={closeMenu}>
                <FaHandsHelping className="mobile-nav-icon" />
                <span>Volunteer</span>
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
                <FaEnvelope className="mobile-nav-icon" />
                <span>Contact</span>
              </Link>
            </li>
            <li className="mobile-nav-item mobile-donate">
              <Link to="/donate" className="mobile-nav-link mobile-donate-btn" onClick={closeMenu}>
                <FaHeart className="mobile-nav-icon" />
                <span>Donate Now</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
