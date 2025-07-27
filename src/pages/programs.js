import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaUsers, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaHandHoldingHeart, FaGraduationCap, FaStethoscope, FaTint, FaExclamationTriangle } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProgramsPage = () => {
  const programs = [
    {
      id: "education",
      title: "Education for All",
      description: "Providing quality education to underprivileged children in rural communities.",
      longDescription: "Our Education for All program focuses on breaking the cycle of poverty through education. We build schools, provide learning materials, train teachers, and offer scholarships to children who would otherwise not have access to education.",
      icon: FaGraduationCap,
      color: "#1e40af",
      impact: {
        students: "15,000+",
        schools: "45",
        teachers: "200+",
        countries: "12"
      },
      features: [
        "School construction and renovation",
        "Teacher training and development",
        "Educational materials and technology",
        "Scholarship programs",
        "Parent education workshops",
        "After-school programs"
      ],
      currentProjects: [
        {
          title: "Rural School Initiative",
          location: "Kenya, Tanzania, Uganda",
          status: "Active",
          description: "Building 10 new schools in rural communities"
        },
        {
          title: "Digital Learning Centers",
          location: "India, Bangladesh",
          status: "Planning",
          description: "Establishing computer labs in existing schools"
        }
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare Access",
      description: "Bringing essential healthcare services to remote and underserved areas.",
      longDescription: "Our Healthcare Access program works to ensure that everyone, regardless of their location or economic status, has access to basic healthcare services. We operate mobile clinics, train community health workers, and provide essential medical supplies.",
      icon: FaStethoscope,
      color: "#059669",
      impact: {
        patients: "25,000+",
        clinics: "30",
        healthWorkers: "150+",
        countries: "8"
      },
      features: [
        "Mobile medical clinics",
        "Community health worker training",
        "Maternal and child health programs",
        "Vaccination campaigns",
        "Health education workshops",
        "Emergency medical response"
      ],
      currentProjects: [
        {
          title: "Maternal Health Initiative",
          location: "Ghana, Nigeria",
          status: "Active",
          description: "Providing prenatal and postnatal care"
        },
        {
          title: "Vaccination Drive",
          location: "Pakistan, Afghanistan",
          status: "Active",
          description: "Immunizing children against preventable diseases"
        }
      ]
    },
    {
      id: "water",
      title: "Clean Water Initiative",
      description: "Building wells and water purification systems in communities in need.",
      longDescription: "Access to clean water is a fundamental human right. Our Clean Water Initiative focuses on providing sustainable water solutions through well construction, water purification systems, and hygiene education programs.",
      icon: FaTint,
      color: "#0891b2",
      impact: {
        beneficiaries: "50,000+",
        wells: "120",
        communities: "85",
        countries: "15"
      },
      features: [
        "Well construction and maintenance",
        "Water purification systems",
        "Hygiene education programs",
        "Sanitation facilities",
        "Water quality monitoring",
        "Community water committees"
      ],
      currentProjects: [
        {
          title: "Deep Well Project",
          location: "Ethiopia, Somalia",
          status: "Active",
          description: "Drilling 20 deep wells in drought-affected areas"
        },
        {
          title: "Water Purification",
          location: "Haiti, Dominican Republic",
          status: "Planning",
          description: "Installing community water purification systems"
        }
      ]
    },
    {
      id: "emergency",
      title: "Emergency Relief",
      description: "Providing immediate assistance during natural disasters and crises.",
      longDescription: "When disasters strike, we respond quickly with emergency relief efforts. Our Emergency Relief program provides immediate assistance including food, shelter, medical care, and long-term recovery support to affected communities.",
      icon: FaExclamationTriangle,
      color: "#dc2626",
      impact: {
        beneficiaries: "100,000+",
        responses: "45",
        countries: "20",
        volunteers: "500+"
      },
      features: [
        "Emergency food and water distribution",
        "Temporary shelter provision",
        "Medical emergency response",
        "Search and rescue operations",
        "Long-term recovery support",
        "Disaster preparedness training"
      ],
      currentProjects: [
        {
          title: "Hurricane Recovery",
          location: "Caribbean Islands",
          status: "Active",
          description: "Supporting communities affected by recent hurricanes"
        },
        {
          title: "Earthquake Response",
          location: "Nepal, Turkey",
          status: "Active",
          description: "Providing relief to earthquake-affected areas"
        }
      ]
    }
  ]

  return (
    <Layout>
      <SEO title="Our Programs" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Our <span className="highlight">Programs</span>
              </h1>
              <p className="hero-description">
                Discover how we're making a difference across various areas of need. 
                Each program is designed to create lasting positive change in communities worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Programs Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Making Impact Across Multiple Areas</h2>
            <p>Our comprehensive programs address the most critical needs in communities worldwide</p>
          </div>
          
          <div className="programs-overview">
            {programs.map((program, index) => (
              <div key={program.id} className="program-detail-card fade-in">
                <div className="program-header">
                  <div className="program-icon-large" style={{ color: program.color }}>
                    <program.icon />
                  </div>
                  <div className="program-info">
                    <h3>{program.title}</h3>
                    <p className="program-description">{program.longDescription}</p>
                  </div>
                </div>
                
                <div className="program-impact">
                  <h4>Program Impact</h4>
                  <div className="impact-stats">
                    {Object.entries(program.impact).map(([key, value]) => (
                      <div key={key} className="impact-stat">
                        <div className="impact-number">{value}</div>
                        <div className="impact-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="program-features">
                  <h4>What We Do</h4>
                  <div className="features-grid">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <FaHeart className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="current-projects">
                  <h4>Current Projects</h4>
                  <div className="projects-grid">
                    {program.currentProjects.map((project, projectIndex) => (
                      <div key={projectIndex} className="project-card">
                        <div className="project-header">
                          <h5>{project.title}</h5>
                          <span className={`project-status status-${project.status.toLowerCase()}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="project-location">
                          <FaMapMarkerAlt /> {project.location}
                        </p>
                        <p className="project-description">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="program-actions">
                  <Link to={`/programs/${program.id}`} className="btn">
                    Learn More About {program.title} <FaArrowRight />
                  </Link>
                  <Link to="/donate" className="btn btn-secondary">
                    Support This Program
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Get Involved</h2>
            <p>There are many ways you can support our programs and make a difference</p>
          </div>
          
          <div className="involvement-grid">
            <div className="involvement-card fade-in">
              <FaHandHoldingHeart className="involvement-icon" />
              <h3>Make a Donation</h3>
              <p>Your financial support helps us expand our programs and reach more communities in need.</p>
              <Link to="/donate" className="btn">
                Donate Now
              </Link>
            </div>
            
            <div className="involvement-card fade-in">
              <FaUsers className="involvement-icon" />
              <h3>Volunteer With Us</h3>
              <p>Join our team of dedicated volunteers and contribute your time and skills to our programs.</p>
              <Link to="/volunteer" className="btn">
                Become a Volunteer
              </Link>
            </div>
            
            <div className="involvement-card fade-in">
              <FaGlobe className="involvement-icon" />
              <h3>Spread Awareness</h3>
              <p>Help us raise awareness about our programs and the communities we serve.</p>
              <Link to="/contact" className="btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Stories of Impact</h2>
            <p>See how our programs are changing lives around the world</p>
          </div>
          
          <div className="stories-grid">
            <div className="story-card fade-in">
              <div className="story-image">
                <FaGraduationCap className="story-icon" />
              </div>
              <div className="story-content">
                <h4>Sarah's Journey to Education</h4>
                <p>"Thanks to Hope Foundation's Education for All program, I was able to attend school for the first time. Now I'm studying to become a teacher so I can help other children like me."</p>
                <div className="story-meta">
                  <span>Sarah, 16</span>
                  <span>Kenya</span>
                </div>
              </div>
            </div>
            
            <div className="story-card fade-in">
              <div className="story-image">
                <FaStethoscope className="story-icon" />
              </div>
              <div className="story-content">
                <h4>Community Health Transformation</h4>
                <p>"The mobile clinic brought healthcare to our village for the first time. My children are now vaccinated and healthy, and I've learned how to keep them safe."</p>
                <div className="story-meta">
                  <span>Maria, 32</span>
                  <span>Ghana</span>
                </div>
              </div>
            </div>
            
            <div className="story-card fade-in">
              <div className="story-image">
                <FaTint className="story-icon" />
              </div>
              <div className="story-content">
                <h4>Clean Water Changes Everything</h4>
                <p>"Having clean water in our village has transformed our lives. No more walking miles to fetch water, and our children are no longer getting sick from waterborne diseases."</p>
                <div className="story-meta">
                  <span>Ahmed, 45</span>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Your support can help us expand our programs and reach more communities in need. 
              Every contribution, no matter how small, makes a real impact.
            </p>
            <div className="cta-actions">
              <Link to="/donate" className="btn btn-large">
                Support Our Programs
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProgramsPage 