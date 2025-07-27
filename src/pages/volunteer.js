import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaUsers, FaHandHoldingHeart, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaGraduationCap, FaStethoscope, FaTint, FaExclamationTriangle, FaClock, FaUserFriends, FaAward, FaEnvelope } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const VolunteerPage = () => {
  const volunteerOpportunities = [
    {
      id: "local",
      title: "Local Community Support",
      description: "Help us make a difference in your own community through various local initiatives.",
      icon: FaUsers,
      color: "#1e40af",
      timeCommitment: "2-10 hours/week",
      duration: "Flexible",
      requirements: [
        "18+ years old",
        "Background check",
        "Orientation training",
        "Reliable transportation"
      ],
      activities: [
        "Food bank assistance",
        "Community outreach",
        "Event planning and support",
        "Administrative tasks",
        "Fundraising events",
        "Youth mentoring"
      ],
      locations: ["All major cities", "Rural communities", "Online opportunities"]
    },
    {
      id: "education",
      title: "Education Programs",
      description: "Support our education initiatives by teaching, mentoring, or providing administrative help.",
      icon: FaGraduationCap,
      color: "#059669",
      timeCommitment: "5-15 hours/week",
      duration: "3-12 months",
      requirements: [
        "Teaching experience preferred",
        "Background check",
        "Training program completion",
        "Commitment to education"
      ],
      activities: [
        "Classroom teaching",
        "Tutoring and mentoring",
        "Curriculum development",
        "School administration",
        "Parent education workshops",
        "Technology training"
      ],
      locations: ["Kenya", "Tanzania", "Uganda", "India", "Bangladesh"]
    },
    {
      id: "healthcare",
      title: "Healthcare Support",
      description: "Assist with medical programs, health education, and community health initiatives.",
      icon: FaStethoscope,
      color: "#0891b2",
      timeCommitment: "10-20 hours/week",
      duration: "6-12 months",
      requirements: [
        "Medical background preferred",
        "Licensed healthcare professional",
        "Background check",
        "Medical training program"
      ],
      activities: [
        "Medical clinic support",
        "Health education workshops",
        "Patient care assistance",
        "Health screenings",
        "Emergency response",
        "Community health outreach"
      ],
      locations: ["Ghana", "Nigeria", "Pakistan", "Afghanistan"]
    },
    {
      id: "emergency",
      title: "Emergency Response",
      description: "Join our emergency response team to help communities affected by disasters.",
      icon: FaExclamationTriangle,
      color: "#dc2626",
      timeCommitment: "On-call basis",
      duration: "Variable",
      requirements: [
        "Emergency response training",
        "Physical fitness",
        "Background check",
        "Flexible availability"
      ],
      activities: [
        "Search and rescue",
        "Emergency medical care",
        "Food and water distribution",
        "Shelter assistance",
        "Recovery support",
        "Disaster preparedness"
      ],
      locations: ["Global deployment", "Local emergency response"]
    }
  ]

  const volunteerBenefits = [
    {
      icon: FaHeart,
      title: "Make a Real Impact",
      description: "Directly contribute to positive change in communities worldwide"
    },
    {
      icon: FaUserFriends,
      title: "Build Community",
      description: "Connect with like-minded individuals and build lasting friendships"
    },
    {
      icon: FaAward,
      title: "Gain Experience",
      description: "Develop new skills and gain valuable experience in humanitarian work"
    },
    {
      icon: FaGlobe,
      title: "Global Perspective",
      description: "Learn about different cultures and global challenges"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Education Volunteer",
      location: "Kenya",
      duration: "8 months",
      quote: "Volunteering with Hope Foundation has been the most rewarding experience of my life. Seeing the children's faces light up when they learn something new is priceless.",
      image: FaGraduationCap
    },
    {
      name: "Michael Chen",
      role: "Healthcare Volunteer",
      location: "Ghana",
      duration: "12 months",
      quote: "The medical training I received and the hands-on experience helping patients has prepared me for my future career in medicine.",
      image: FaStethoscope
    },
    {
      name: "Maria Rodriguez",
      role: "Local Community Volunteer",
      location: "Local Chapter",
      duration: "2 years",
      quote: "I started volunteering locally and it's amazing how much impact we can make right in our own community. The team is supportive and the work is meaningful.",
      image: FaUsers
    }
  ]

  return (
    <Layout>
      <SEO title="Volunteer With Us" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="highlight">Volunteer</span> With Us
              </h1>
              <p className="hero-description">
                Join our team of dedicated volunteers and make a real difference in communities worldwide. 
                Your time, skills, and compassion can change lives.
              </p>
              <div className="hero-actions">
                <Link to="#opportunities" className="btn btn-large">
                  View Opportunities
                </Link>
                <Link to="#apply" className="btn btn-secondary btn-large">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Why Volunteer Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Volunteer With Hope Foundation?</h2>
            <p>Join thousands of volunteers who are making a difference around the world</p>
          </div>
          
          <div className="benefits-grid">
            {volunteerBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card fade-in">
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

      {/* Volunteer Opportunities */}
      <section id="opportunities" className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Volunteer Opportunities</h2>
            <p>Find the perfect opportunity that matches your skills, interests, and availability</p>
          </div>
          
          <div className="opportunities-grid">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={opportunity.id} className="opportunity-card fade-in">
                <div className="opportunity-header">
                  <div className="opportunity-icon" style={{ color: opportunity.color }}>
                    <opportunity.icon />
                  </div>
                  <div className="opportunity-info">
                    <h3>{opportunity.title}</h3>
                    <p>{opportunity.description}</p>
                  </div>
                </div>
                
                <div className="opportunity-details">
                  <div className="detail-item">
                    <FaClock />
                    <span><strong>Time Commitment:</strong> {opportunity.timeCommitment}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendarAlt />
                    <span><strong>Duration:</strong> {opportunity.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt />
                    <span><strong>Locations:</strong> {opportunity.locations.join(", ")}</span>
                  </div>
                </div>
                
                <div className="opportunity-requirements">
                  <h4>Requirements</h4>
                  <ul>
                    {opportunity.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex}>{requirement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="opportunity-activities">
                  <h4>Activities</h4>
                  <div className="activities-grid">
                    {opportunity.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="activity-item">
                        <FaHeart className="activity-icon" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="opportunity-actions">
                  <Link to={`/volunteer/${opportunity.id}`} className="btn">
                    Learn More <FaArrowRight />
                  </Link>
                  <Link to="#apply" className="btn btn-secondary">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Volunteer Stories</h2>
            <p>Hear from our volunteers about their experiences and the impact they've made</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card fade-in">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <testimonial.image />
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <p className="testimonial-location">
                      <FaMapMarkerAlt /> {testimonial.location} • {testimonial.duration}
                    </p>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>How to Apply</h2>
            <p>Follow these simple steps to start your volunteer journey with us</p>
          </div>
          
          <div className="application-steps">
            <div className="step-card fade-in">
              <div className="step-number">1</div>
              <h3>Explore Opportunities</h3>
              <p>Browse our volunteer opportunities and find the one that best matches your skills and interests.</p>
            </div>
            
            <div className="step-card fade-in">
              <div className="step-number">2</div>
              <h3>Submit Application</h3>
              <p>Complete our online application form with your personal information and preferences.</p>
            </div>
            
            <div className="step-card fade-in">
              <div className="step-number">3</div>
              <h3>Interview & Training</h3>
              <p>Meet with our team for an interview and complete required training programs.</p>
            </div>
            
            <div className="step-card fade-in">
              <div className="step-number">4</div>
              <h3>Start Volunteering</h3>
              <p>Begin your volunteer journey and start making a difference in communities worldwide.</p>
            </div>
          </div>
          
          <div className="application-cta text-center">
            <h3>Ready to Get Started?</h3>
            <p>Join our team of dedicated volunteers and help us create positive change</p>
            <Link to="/volunteer/apply" className="btn btn-large">
              Apply to Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about volunteering with Hope Foundation</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do I need any special skills or experience?</h3>
              <p>While some positions require specific skills or experience, we have opportunities for volunteers of all backgrounds and skill levels. We provide training for all volunteers.</p>
            </div>
            
            <div className="faq-item">
              <h3>How much time do I need to commit?</h3>
              <p>Time commitments vary by opportunity, ranging from a few hours per week for local volunteering to full-time commitments for international programs.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are there age requirements?</h3>
              <p>Most volunteer opportunities require volunteers to be 18 or older. We do have some youth programs for teenagers with parental consent.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you provide training?</h3>
              <p>Yes, all volunteers receive comprehensive training before starting their assignments, including safety protocols and program-specific training.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I volunteer remotely?</h3>
              <p>Yes, we offer remote volunteering opportunities in areas like administration, fundraising, and online education support.</p>
            </div>
            
            <div className="faq-item">
              <h3>What support do you provide to volunteers?</h3>
              <p>We provide ongoing support including mentorship, regular check-ins, access to resources, and a community of fellow volunteers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="contact-volunteer text-center">
            <h2>Have Questions?</h2>
            <p>Our volunteer coordinator team is here to help you find the perfect opportunity</p>
            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelope />
                <h4>Email Us</h4>
                <p>volunteer@hopefoundation.org</p>
              </div>
              <div className="contact-method">
                <FaPhone />
                <h4>Call Us</h4>
                <p>(555) 123-4567 ext. 2</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-large">
              Contact Volunteer Team
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Join thousands of volunteers who are already making an impact around the world. 
              Your time and skills can change lives.
            </p>
            <div className="cta-actions">
              <Link to="/volunteer/apply" className="btn btn-large">
                Start Your Volunteer Journey
              </Link>
              <Link to="/donate" className="btn btn-secondary btn-large">
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default VolunteerPage 