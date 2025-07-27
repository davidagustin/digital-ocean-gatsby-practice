import React from "react"
import { Link } from "gatsby"
import { FaShieldAlt, FaLock, FaEye, FaTrash, FaEnvelope } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="highlight">Privacy</span> Policy
              </h1>
              <p className="hero-description">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Privacy Content */}
      <section className="section">
        <div className="container">
          <div className="privacy-content">
            <div className="privacy-section">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul>
                <li>Make a donation</li>
                <li>Sign up for our newsletter</li>
                <li>Register for events</li>
                <li>Apply to volunteer</li>
                <li>Contact us through our website</li>
              </ul>
              <p>The types of information we may collect include:</p>
              <ul>
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment information for donations</li>
                <li>Volunteer application details</li>
                <li>Event registration preferences</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process your donations and provide receipts</li>
                <li>Send you newsletters and updates about our work</li>
                <li>Register you for events and activities</li>
                <li>Process volunteer applications</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
              <ul>
                <li>With trusted service providers who assist us in operating our website and conducting our business</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul>
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage practices</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Cookies and Tracking</h2>
              <p>Our website uses cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve user experience</li>
                <li>Provide personalized content</li>
              </ul>
              <p>You can control cookie settings through your browser preferences.</p>
            </div>

            <div className="privacy-section">
              <h2>Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
            </div>

            <div className="privacy-section">
              <h2>Children's Privacy</h2>
              <p>We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.</p>
            </div>

            <div className="privacy-section">
              <h2>Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
            </div>

            <div className="privacy-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
              <div className="contact-info">
                <p><FaEnvelope /> Email: privacy@hopefoundation.org</p>
                <p><FaEnvelope /> Address: 123 Hope Street, City, State 12345</p>
                <p><FaEnvelope /> Phone: (555) 123-4567</p>
              </div>
            </div>

            <div className="privacy-footer">
              <p><strong>Last Updated:</strong> December 1, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="privacy-contact text-center">
            <h2>Questions About Privacy?</h2>
            <p>Our privacy team is here to help you understand how we protect your information</p>
            <Link to="/contact" className="btn btn-large">
              Contact Privacy Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PrivacyPage 