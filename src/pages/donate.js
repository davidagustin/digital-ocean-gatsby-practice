import React, { useState } from "react"
import { FaHeart, FaCreditCard, FaPaypal, FaLock, FaCheckCircle, FaArrowRight } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("general")
  const [isRecurring, setIsRecurring] = useState(false)

  const donationAmounts = [
    { value: "25", label: "$25", description: "Provides clean water for a family" },
    { value: "50", label: "$50", description: "Supplies school materials for 5 children" },
    { value: "100", label: "$100", description: "Funds medical care for 10 patients" },
    { value: "250", label: "$250", description: "Builds a water well for a community" },
    { value: "500", label: "$500", description: "Establishes a small medical clinic" },
    { value: "1000", label: "$1,000", description: "Funds an entire education program" }
  ]

  const programs = [
    { value: "general", label: "General Fund", description: "Support our most urgent needs" },
    { value: "education", label: "Education", description: "Help children access quality education" },
    { value: "healthcare", label: "Healthcare", description: "Provide medical care to communities" },
    { value: "water", label: "Clean Water", description: "Build wells and water systems" },
    { value: "emergency", label: "Emergency Relief", description: "Respond to crises and disasters" }
  ]

  const impactExamples = [
    {
      amount: "$25",
      impact: "Provides clean drinking water for a family for one month"
    },
    {
      amount: "$50",
      impact: "Supplies school materials and uniforms for 5 children"
    },
    {
      amount: "$100",
      impact: "Funds medical care and vaccinations for 10 patients"
    },
    {
      amount: "$250",
      impact: "Builds a water well serving an entire community"
    },
    {
      amount: "$500",
      impact: "Establishes a small medical clinic in a rural area"
    },
    {
      amount: "$1,000",
      impact: "Funds an entire education program for a village"
    }
  ]

  const handleDonationSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would integrate with a payment processor
    alert("Thank you for your donation! This would redirect to a secure payment processor.")
  }

  return (
    <Layout>
      <SEO title="Donate" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Make a <span className="highlight">Difference</span> Today
              </h1>
              <p className="hero-description">
                Your donation directly supports our programs and helps us create lasting positive change 
                in communities around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Donation Form Section */}
      <section className="section">
        <div className="container">
          <div className="donation-grid">
            <div className="donation-form-container">
              <div className="donation-form-card">
                <h2>Make Your Donation</h2>
                <p className="form-subtitle">Every dollar makes a difference</p>
                
                <form onSubmit={handleDonationSubmit} className="donation-form">
                  {/* Donation Amount */}
                  <div className="form-group">
                    <label>Select Donation Amount</label>
                    <div className="amount-options">
                      {donationAmounts.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className={`amount-option ${donationAmount === option.value ? 'selected' : ''}`}
                          onClick={() => setDonationAmount(option.value)}
                        >
                          <div className="amount-label">{option.label}</div>
                          <div className="amount-description">{option.description}</div>
                        </button>
                      ))}
                    </div>
                    <div className="custom-amount">
                      <label>Or enter a custom amount:</label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="form-group">
                    <label>Choose Program (Optional)</label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                    >
                      {programs.map((program) => (
                        <option key={program.value} value={program.value}>
                          {program.label} - {program.description}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Recurring Donation */}
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={(e) => setIsRecurring(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      Make this a monthly recurring donation
                    </label>
                  </div>

                  {/* Security Notice */}
                  <div className="security-notice">
                    <FaLock /> Your donation is secure and encrypted
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-large btn-donate">
                    <FaCreditCard /> Complete Donation
                  </button>
                </form>
              </div>
            </div>

            <div className="donation-info">
              <div className="info-card">
                <h3>Your Impact</h3>
                <p>See how your donation makes a real difference:</p>
                <div className="impact-list">
                  {impactExamples.map((example, index) => (
                    <div key={index} className="impact-item">
                      <div className="impact-amount">{example.amount}</div>
                      <div className="impact-description">{example.impact}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-card">
                <h3>Why Donate?</h3>
                <ul className="benefits-list">
                  <li><FaCheckCircle /> 100% of your donation goes directly to programs</li>
                  <li><FaCheckCircle /> Transparent reporting on all funds</li>
                  <li><FaCheckCircle /> Tax-deductible donations</li>
                  <li><FaCheckCircle /> Regular updates on your impact</li>
                  <li><FaCheckCircle /> Secure and encrypted transactions</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Other Ways to Give</h3>
                <div className="other-ways">
                  <button className="btn btn-secondary">
                    <FaPaypal /> PayPal
                  </button>
                  <button className="btn btn-secondary">
                    Bank Transfer
                  </button>
                  <button className="btn btn-secondary">
                    Mail Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Donation Impact</h2>
            <p>See how your generosity transforms lives</p>
          </div>
          <div className="impact-stats-grid">
            <div className="impact-stat">
              <div className="stat-number">$2.5M</div>
              <div className="stat-label">Total Funds Raised</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Goes Directly to Programs</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Donor Stories</h2>
            <p>Hear from our generous supporters</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've been donating monthly for 3 years and seeing the impact reports makes me proud to be part of this mission."</p>
              </div>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Monthly Donor</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Knowing that my donation helped build a school for children who had no access to education is incredibly rewarding."</p>
              </div>
              <div className="testimonial-author">
                <strong>Michael R.</strong>
                <span>One-time Donor</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The transparency and regular updates from Hope Foundation give me confidence that my money is making a real difference."</p>
              </div>
              <div className="testimonial-author">
                <strong>Jennifer L.</strong>
                <span>Corporate Partner</span>
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
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is my donation tax-deductible?</h3>
              <p>Yes, Hope Foundation is a registered 501(c)(3) nonprofit organization, making all donations tax-deductible.</p>
            </div>
            <div className="faq-item">
              <h3>How much of my donation goes to programs?</h3>
              <p>95% of every dollar donated goes directly to our programs. Only 5% covers administrative and fundraising costs.</p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel my recurring donation?</h3>
              <p>Yes, you can cancel or modify your recurring donation at any time by contacting our donor services team.</p>
            </div>
            <div className="faq-item">
              <h3>Will I receive a receipt for my donation?</h3>
              <p>Yes, you'll receive an email receipt immediately after your donation, and an annual tax receipt in January.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DonatePage 