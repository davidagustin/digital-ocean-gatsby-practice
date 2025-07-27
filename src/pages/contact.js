import React, { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the form data
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["(555) 123-4567", "(555) 123-4568"],
      link: "tel:+15551234567"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@hopefoundation.org", "support@hopefoundation.org"],
      link: "mailto:info@hopefoundation.org"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: ["123 Hope Street", "City, State 12345", "United States"],
      link: "https://maps.google.com"
    },
    {
      icon: FaClock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      link: null
    }
  ]

  const faqs = [
    {
      question: "How can I volunteer with Hope Foundation?",
      answer: "You can apply to volunteer through our website or contact our volunteer coordinator directly. We have opportunities for both local and international volunteering."
    },
    {
      question: "How do I make a donation?",
      answer: "You can donate online through our secure donation form, by phone, or by mailing a check to our office address."
    },
    {
      question: "Can I sponsor a specific program?",
      answer: "Yes, you can designate your donation to specific programs like education, healthcare, or clean water initiatives."
    },
    {
      question: "How can my organization partner with Hope Foundation?",
      answer: "We welcome partnerships with organizations that share our mission. Please contact our partnerships team to discuss collaboration opportunities."
    }
  ]

  return (
    <Layout>
      <SEO title="Contact Us" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Get in <span className="highlight">Touch</span>
              </h1>
              <p className="hero-description">
                Have questions? Want to get involved? We'd love to hear from you. 
                Reach out to us and let's work together to make a difference.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                <p className="form-subtitle">We'll get back to you within 24 hours</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-large">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">
                        <info.icon />
                      </div>
                      <div className="contact-content">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="contact-link">
                            {info.details.map((detail, i) => (
                              <div key={i}>{detail}</div>
                            ))}
                          </a>
                        ) : (
                          info.details.map((detail, i) => (
                            <div key={i}>{detail}</div>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-card">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li><a href="/volunteer">Volunteer Opportunities</a></li>
                  <li><a href="/donate">Make a Donation</a></li>
                  <li><a href="/programs">Our Programs</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/events">Upcoming Events</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Office Locations</h2>
            <p>Visit us at one of our offices around the world</p>
          </div>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-header">
                <h3>Headquarters</h3>
                <span className="location-type">Main Office</span>
              </div>
              <div className="location-details">
                <p><FaMapMarkerAlt /> 123 Hope Street, City, State 12345</p>
                <p><FaPhone /> (555) 123-4567</p>
                <p><FaEnvelope /> info@hopefoundation.org</p>
              </div>
              <div className="location-hours">
                <strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM
              </div>
            </div>
            
            <div className="location-card">
              <div className="location-header">
                <h3>Regional Office</h3>
                <span className="location-type">West Coast</span>
              </div>
              <div className="location-details">
                <p><FaMapMarkerAlt /> 456 Charity Ave, West City, CA 90210</p>
                <p><FaPhone /> (555) 987-6543</p>
                <p><FaEnvelope /> west@hopefoundation.org</p>
              </div>
              <div className="location-hours">
                <strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM
              </div>
            </div>
            
            <div className="location-card">
              <div className="location-header">
                <h3>International Office</h3>
                <span className="location-type">Global Programs</span>
              </div>
              <div className="location-details">
                <p><FaMapMarkerAlt /> 789 Global Blvd, International City</p>
                <p><FaPhone /> +1 (555) 456-7890</p>
                <p><FaEnvelope /> global@hopefoundation.org</p>
              </div>
              <div className="location-hours">
                <strong>Hours:</strong> Mon-Fri 8AM-8PM (Local Time)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="emergency-contact">
            <div className="emergency-content">
              <h2>Emergency Contact</h2>
              <p>
                For urgent matters, natural disaster response, or immediate assistance needs, 
                please contact our emergency response team directly.
              </p>
              <div className="emergency-details">
                <div className="emergency-item">
                  <strong>Emergency Hotline:</strong> (555) 911-HELP
                </div>
                <div className="emergency-item">
                  <strong>24/7 Response:</strong> Available for crisis situations
                </div>
                <div className="emergency-item">
                  <strong>Email:</strong> emergency@hopefoundation.org
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage 