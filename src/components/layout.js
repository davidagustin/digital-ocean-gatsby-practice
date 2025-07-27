/**
 * Layout component for Hope Foundation Charity Website
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaHeart, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layout-container">
        <main className="main-content">{children}</main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Hope Foundation</h3>
              <p>Making a difference in communities worldwide through compassion, action, and hope.</p>
              <div className="social-links">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/programs">Our Programs</a></li>
                <li><a href="/donate">Donate</a></li>
                <li><a href="/volunteer">Volunteer</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Get Involved</h4>
              <ul>
                <li><a href="/donate">Make a Donation</a></li>
                <li><a href="/volunteer">Volunteer With Us</a></li>
                <li><a href="/events">Upcoming Events</a></li>
                <li><a href="/newsletter">Newsletter</a></li>
                <li><a href="/partners">Partnerships</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>123 Hope Street<br />
              City, State 12345<br />
              Phone: (555) 123-4567<br />
              Email: info@hopefoundation.org</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Hope Foundation. All rights reserved. 
              Made with <FaHeart className="heart-icon" /> for the community.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
