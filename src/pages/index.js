import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaUsers, FaHandHoldingHeart, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const impactStats = [
    { number: "50,000+", label: "Lives Impacted", icon: FaHeart },
    { number: "1,200+", label: "Volunteers", icon: FaUsers },
    { number: "$2.5M", label: "Funds Raised", icon: FaHandHoldingHeart },
    { number: "25+", label: "Countries", icon: FaGlobe },
  ]

  const programs = [
    {
      title: "Education for All",
      description: "Providing quality education to underprivileged children in rural communities.",
      icon: "📚",
      link: "/programs/education"
    },
    {
      title: "Healthcare Access",
      description: "Bringing essential healthcare services to remote and underserved areas.",
      icon: "🏥",
      link: "/programs/healthcare"
    },
    {
      title: "Clean Water Initiative",
      description: "Building wells and water purification systems in communities in need.",
      icon: "💧",
      link: "/programs/water"
    },
    {
      title: "Emergency Relief",
      description: "Providing immediate assistance during natural disasters and crises.",
      icon: "🚨",
      link: "/programs/emergency"
    }
  ]

  const upcomingEvents = [
    {
      title: "Annual Charity Gala",
      date: "December 15, 2024",
      location: "Grand Hotel, Downtown",
      description: "Join us for our biggest fundraising event of the year."
    },
    {
      title: "Volunteer Training Day",
      date: "December 20, 2024",
      location: "Community Center",
      description: "Learn how you can make a difference in your community."
    },
    {
      title: "Holiday Food Drive",
      date: "December 25, 2024",
      location: "Various Locations",
      description: "Help us provide meals to families in need this holiday season."
    }
  ]

  return (
    <Layout>
      <SEO title="Home" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Making a Difference, <span className="highlight">One Life at a Time</span>
              </h1>
              <p className="hero-description">
                Join Hope Foundation in our mission to create positive change in communities worldwide. 
                Together, we can build a brighter future for those who need it most.
              </p>
              <div className="hero-actions">
                <Link to="/donate" className="btn btn-large">
                  Donate Now
                </Link>
                <Link to="/volunteer" className="btn btn-secondary btn-large">
                  Volunteer With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Impact Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="stat-card fade-in">
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-grid">
            <div className="about-content slide-in-left">
              <h2>About Hope Foundation</h2>
              <p>
                Founded in 2010, Hope Foundation has been dedicated to transforming lives and 
                communities through compassionate action and sustainable development programs. 
                We believe that every person deserves access to basic necessities, education, 
                and healthcare.
              </p>
              <p>
                Our team of dedicated professionals and volunteers work tirelessly across 
                multiple countries to address the root causes of poverty and inequality, 
                creating lasting positive change for generations to come.
              </p>
              <Link to="/about" className="btn">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>
            <div className="about-image slide-in-right">
              <div className="image-placeholder">
                <FaHeart className="placeholder-icon" />
                <p>Community Impact Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Programs</h2>
            <p>Discover how we're making a difference across various areas of need</p>
          </div>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card fade-in">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={program.link} className="program-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Upcoming Events</h2>
            <p>Join us in our mission to create positive change</p>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card fade-in">
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <div className="event-date">
                      <FaCalendarAlt /> {event.date}
                    </div>
                    <div className="event-location">
                      <FaMapMarkerAlt /> {event.location}
                    </div>
                  </div>
                </div>
                <p>{event.description}</p>
                <Link to="/events" className="btn btn-secondary">
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Your support can change lives. Whether through donations, volunteering, 
              or spreading awareness, every action counts.
            </p>
            <div className="cta-actions">
              <Link to="/donate" className="btn btn-large">
                Make a Donation
              </Link>
              <Link to="/volunteer" className="btn btn-secondary btn-large">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
