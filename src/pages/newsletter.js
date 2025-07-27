import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaUsers, FaHandHoldingHeart, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaEnvelope, FaCheck, FaRss, FaNewspaper, FaBell } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsletterPage = () => {
  const newsletterTopics = [
    {
      id: "programs",
      title: "Program Updates",
      description: "Stay informed about our education, healthcare, water, and emergency relief programs",
      icon: FaHeart,
      frequency: "Monthly"
    },
    {
      id: "events",
      title: "Events & Activities",
      description: "Get notified about upcoming events, volunteer opportunities, and community activities",
      icon: FaCalendarAlt,
      frequency: "Weekly"
    },
    {
      id: "impact",
      title: "Impact Stories",
      description: "Read inspiring stories about the lives we've touched and communities we've helped",
      icon: FaUsers,
      frequency: "Bi-weekly"
    },
    {
      id: "volunteer",
      title: "Volunteer Opportunities",
      description: "Learn about new volunteer positions and ways to get involved in your community",
      icon: FaHandHoldingHeart,
      frequency: "Monthly"
    },
    {
      id: "fundraising",
      title: "Fundraising Campaigns",
      description: "Stay updated on our fundraising efforts and how your donations make a difference",
      icon: FaGlobe,
      frequency: "Monthly"
    },
    {
      id: "news",
      title: "General News",
      description: "Receive updates about our organization, staff changes, and general announcements",
      icon: FaNewspaper,
      frequency: "Monthly"
    }
  ]

  const newsletterBenefits = [
    {
      icon: FaBell,
      title: "Stay Informed",
      description: "Get the latest updates about our programs and impact"
    },
    {
      icon: FaRss,
      title: "Exclusive Content",
      description: "Access to stories and updates not shared elsewhere"
    },
    {
      icon: FaEnvelope,
      title: "Personalized Updates",
      description: "Choose topics that interest you most"
    },
    {
      icon: FaHeart,
      title: "Make a Difference",
      description: "Learn about new ways to support our mission"
    }
  ]

  const recentNewsletters = [
    {
      title: "November 2024 - Education Program Success",
      date: "November 15, 2024",
      description: "Read about our recent education initiatives and the impact they're making in rural communities.",
      topics: ["Program Updates", "Impact Stories"]
    },
    {
      title: "October 2024 - Volunteer Spotlight",
      date: "October 30, 2024",
      description: "Meet our amazing volunteers and learn about upcoming volunteer opportunities.",
      topics: ["Volunteer Opportunities", "Impact Stories"]
    },
    {
      title: "September 2024 - Emergency Response Update",
      date: "September 20, 2024",
      description: "Latest updates on our emergency relief efforts and how you can help.",
      topics: ["Program Updates", "Fundraising Campaigns"]
    }
  ]

  return (
    <Layout>
      <SEO title="Newsletter" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Stay <span className="highlight">Connected</span>
              </h1>
              <p className="hero-description">
                Subscribe to our newsletter and stay informed about our programs, events, 
                and the impact we're making in communities worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Newsletter Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Subscribe to Our Newsletter?</h2>
            <p>Join thousands of subscribers who stay connected with our mission</p>
          </div>
          
          <div className="newsletter-benefits-grid">
            {newsletterBenefits.map((benefit, index) => (
              <div key={index} className="newsletter-benefit-card fade-in">
                <div className="benefit-icon">
                  <benefit.icon />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Topics */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Choose Your Topics</h2>
            <p>Select the topics that interest you most and customize your newsletter experience</p>
          </div>
          
          <div className="topics-grid">
            {newsletterTopics.map((topic) => (
              <div key={topic.id} className="topic-card fade-in">
                <div className="topic-header">
                  <div className="topic-icon">
                    <topic.icon />
                  </div>
                  <div className="topic-info">
                    <h3>{topic.title}</h3>
                    <span className="topic-frequency">{topic.frequency}</span>
                  </div>
                </div>
                <p className="topic-description">{topic.description}</p>
                <div className="topic-checkbox">
                  <input type="checkbox" id={topic.id} defaultChecked />
                  <label htmlFor={topic.id}>
                    <FaCheck />
                    Subscribe to {topic.title}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Form */}
      <section className="section">
        <div className="container">
          <div className="newsletter-signup">
            <div className="signup-content">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Join our community and receive updates about our work and impact</p>
              
              <form className="newsletter-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="frequency">Email Frequency</label>
                  <select id="frequency" name="frequency">
                    <option value="weekly">Weekly Digest</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="volunteer" />
                    I'm interested in volunteer opportunities
                  </label>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="donor" />
                    I'm interested in making donations
                  </label>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="events" />
                    I want to receive event invitations
                  </label>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="privacy" required />
                    I agree to the privacy policy and terms of service *
                  </label>
                </div>
                
                <button type="submit" className="btn btn-large">
                  Subscribe to Newsletter
                </button>
              </form>
              
              <div className="signup-note">
                <p>
                  <small>
                    * Required fields. You can unsubscribe at any time. We respect your privacy 
                    and will never share your information with third parties.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Newsletters */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Recent Newsletters</h2>
            <p>Take a look at our recent newsletters to see what you can expect</p>
          </div>
          
          <div className="recent-newsletters-grid">
            {recentNewsletters.map((newsletter, index) => (
              <div key={index} className="newsletter-preview-card fade-in">
                <div className="newsletter-header">
                  <h3>{newsletter.title}</h3>
                  <span className="newsletter-date">{newsletter.date}</span>
                </div>
                <p className="newsletter-description">{newsletter.description}</p>
                <div className="newsletter-topics">
                  {newsletter.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="topic-tag">{topic}</span>
                  ))}
                </div>
                <Link to={`/newsletter/${index + 1}`} className="btn btn-secondary">
                  Read Newsletter
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="section">
        <div className="container">
          <div className="newsletter-archive text-center">
            <h2>Newsletter Archive</h2>
            <p>Access our complete collection of past newsletters</p>
            <div className="archive-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Newsletters Published</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Active Subscribers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Open Rate</div>
              </div>
            </div>
            <Link to="/newsletter/archive" className="btn btn-large">
              Browse Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Unsubscribe Information */}
      <section className="section section-alt">
        <div className="container">
          <div className="unsubscribe-info text-center">
            <h2>Manage Your Subscription</h2>
            <p>You have full control over your newsletter preferences</p>
            <div className="management-options">
              <div className="option-card">
                <FaEnvelope />
                <h4>Update Preferences</h4>
                <p>Change your email frequency or topic preferences</p>
                <Link to="/newsletter/preferences" className="btn btn-secondary">
                  Update Preferences
                </Link>
              </div>
              <div className="option-card">
                <FaRss />
                <h4>Unsubscribe</h4>
                <p>You can unsubscribe at any time with one click</p>
                <Link to="/newsletter/unsubscribe" className="btn btn-secondary">
                  Unsubscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="section">
        <div className="container">
          <div className="privacy-security text-center">
            <h2>Privacy & Security</h2>
            <p>Your privacy is important to us</p>
            <div className="privacy-features">
              <div className="privacy-feature">
                <FaCheck />
                <span>We never share your email with third parties</span>
              </div>
              <div className="privacy-feature">
                <FaCheck />
                <span>Easy one-click unsubscribe</span>
              </div>
              <div className="privacy-feature">
                <FaCheck />
                <span>Secure email delivery</span>
              </div>
              <div className="privacy-feature">
                <FaCheck />
                <span>Full control over your preferences</span>
              </div>
            </div>
            <div className="privacy-links">
              <Link to="/privacy" className="btn btn-secondary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="btn btn-secondary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Stay Connected With Us</h2>
            <p>
              Join our newsletter community and be part of the positive change we're creating. 
              Get inspired, stay informed, and make a difference.
            </p>
            <div className="cta-actions">
              <Link to="#signup" className="btn btn-large">
                Subscribe Now
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NewsletterPage 