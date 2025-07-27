import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaUsers, FaHandshake, FaLightbulb, FaGlobe, FaArrowRight } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const values = [
    {
      icon: FaHeart,
      title: "Compassion",
      description: "We approach every individual and community with empathy and understanding."
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "We believe in the power of collective action and community engagement."
    },
    {
      icon: FaHandshake,
      title: "Integrity",
      description: "We maintain the highest standards of transparency and ethical conduct."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We continuously seek creative solutions to address complex challenges."
    },
    {
      icon: FaGlobe,
      title: "Sustainability",
      description: "We create lasting impact through sustainable development practices."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "With over 15 years of experience in nonprofit leadership, Sarah leads our organization with passion and strategic vision.",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      bio: "Michael oversees our international programs, ensuring effective delivery of services to communities in need.",
      image: "👨‍💼"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Director",
      bio: "Dr. Rodriguez leads our healthcare initiatives, bringing expertise in public health and community medicine.",
      image: "👩‍⚕️"
    },
    {
      name: "David Thompson",
      role: "Operations Manager",
      bio: "David ensures smooth operations across all our programs and manages our volunteer coordination efforts.",
      image: "👨‍🔧"
    }
  ]

  return (
    <Layout>
      <SEO title="About Us" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                About <span className="highlight">Hope Foundation</span>
              </h1>
              <p className="hero-description">
                Learn about our mission, values, and the dedicated team working to create positive change worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content slide-in-left">
              <h2>Our Mission</h2>
              <p>
                Hope Foundation is dedicated to empowering communities and transforming lives through 
                sustainable development programs, education, healthcare, and emergency relief. We believe 
                that every individual deserves access to basic necessities and opportunities for growth.
              </p>
              <p>
                Our mission is to create lasting positive change by addressing the root causes of 
                poverty and inequality, while building resilient communities that can thrive for 
                generations to come.
              </p>
            </div>
            <div className="about-content slide-in-right">
              <h2>Our Vision</h2>
              <p>
                We envision a world where every person has access to quality education, healthcare, 
                clean water, and the opportunity to reach their full potential. A world where 
                communities are empowered to create their own sustainable futures.
              </p>
              <p>
                Through collaboration, innovation, and unwavering commitment, we strive to be a 
                catalyst for positive change, inspiring others to join us in building a more 
                equitable and compassionate world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card fade-in">
                <div className="value-icon">
                  <value.icon />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Story</h2>
            <p>From humble beginnings to global impact</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Foundation Established</h3>
                <p>Hope Foundation was founded by a group of passionate individuals committed to making a difference in their local community.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h3>First International Program</h3>
                <p>We expanded our reach internationally, launching our first education program in rural communities.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>Healthcare Initiative</h3>
                <p>Launched our comprehensive healthcare program, providing medical services to underserved areas.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Emergency Response</h3>
                <p>Established our emergency relief program to respond to natural disasters and humanitarian crises.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Now operating in 25+ countries, impacting over 50,000 lives annually with sustainable development programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Leadership Team</h2>
            <p>Meet the dedicated professionals driving our mission forward</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card fade-in">
                <div className="team-image">
                  <span className="team-avatar">{member.image}</span>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Impact</h2>
            <p>Real change, real results</p>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>Education</h3>
              <ul>
                <li>Built 50+ schools in rural communities</li>
                <li>Provided education to 15,000+ children</li>
                <li>Trained 500+ teachers</li>
                <li>Distributed 25,000+ educational materials</li>
              </ul>
            </div>
            <div className="impact-card">
              <h3>Healthcare</h3>
              <ul>
                <li>Established 30+ medical clinics</li>
                <li>Provided care to 20,000+ patients</li>
                <li>Conducted 1,000+ health awareness sessions</li>
                <li>Vaccinated 10,000+ children</li>
              </ul>
            </div>
            <div className="impact-card">
              <h3>Water & Sanitation</h3>
              <ul>
                <li>Built 100+ water wells</li>
                <li>Installed 200+ water purification systems</li>
                <li>Provided clean water to 25,000+ people</li>
                <li>Constructed 150+ sanitation facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Join Our Mission</h2>
            <p>
              Ready to make a difference? Whether through donations, volunteering, or spreading awareness, 
              your support helps us continue our vital work.
            </p>
            <div className="cta-actions">
              <Link to="/donate" className="btn btn-large">
                Support Our Work
              </Link>
              <Link to="/volunteer" className="btn btn-secondary btn-large">
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage 