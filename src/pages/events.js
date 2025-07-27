import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaUsers, FaHandHoldingHeart, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaClock, FaTicketAlt, FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: "gala-2024",
      title: "Annual Charity Gala 2024",
      date: "December 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Grand Hotel Ballroom, Downtown",
      address: "123 Main Street, City, State 12345",
      description: "Join us for our biggest fundraising event of the year! Enjoy an evening of fine dining, live entertainment, and silent auctions while supporting our mission to create positive change worldwide.",
      longDescription: "Our Annual Charity Gala is the highlight of our fundraising calendar, bringing together supporters, donors, and community leaders for an unforgettable evening. This year's theme focuses on 'Building Bridges of Hope' and will feature inspiring stories from our programs, live performances, and opportunities to make a direct impact through our various fundraising activities.",
      category: "Fundraising",
      price: "$150 per person",
      capacity: "300 attendees",
      registrationDeadline: "December 10, 2024",
      highlights: [
        "Gourmet dinner and open bar",
        "Live entertainment and performances",
        "Silent and live auctions",
        "Keynote speakers from our programs",
        "Networking opportunities",
        "Photo booth and memorabilia"
      ],
      speakers: [
        "Dr. Sarah Johnson - Executive Director",
        "Michael Chen - Program Director",
        "Maria Rodriguez - Volunteer Coordinator"
      ],
      sponsors: [
        "ABC Corporation",
        "XYZ Foundation",
        "Local Business Alliance"
      ]
    },
    {
      id: "volunteer-training",
      title: "Volunteer Training Day",
      date: "December 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Community Center",
      address: "456 Oak Avenue, City, State 12345",
      description: "Learn how you can make a difference in your community through our comprehensive volunteer training program.",
      longDescription: "This intensive training day is designed for new volunteers and those looking to expand their skills. You'll learn about our programs, safety protocols, and how to effectively serve communities in need. The training includes hands-on activities, group discussions, and practical workshops.",
      category: "Training",
      price: "Free",
      capacity: "50 participants",
      registrationDeadline: "December 18, 2024",
      highlights: [
        "Program overview and orientation",
        "Safety and emergency protocols",
        "Cultural sensitivity training",
        "Hands-on workshops",
        "Networking lunch",
        "Certificate of completion"
      ],
      speakers: [
        "Training Coordinator",
        "Safety Officer",
        "Program Managers"
      ],
      sponsors: []
    },
    {
      id: "holiday-food-drive",
      title: "Holiday Food Drive",
      date: "December 25, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Various Locations",
      address: "Multiple drop-off points across the city",
      description: "Help us provide meals to families in need this holiday season through our annual food drive.",
      longDescription: "Our Holiday Food Drive is a community-wide effort to ensure no family goes hungry during the holiday season. We partner with local businesses, schools, and community organizations to collect and distribute food to families in need. This year, we're aiming to serve over 1,000 families.",
      category: "Community Service",
      price: "Free to participate",
      capacity: "Unlimited",
      registrationDeadline: "December 24, 2024",
      highlights: [
        "Multiple collection points",
        "Family-friendly activities",
        "Community building",
        "Direct impact on local families",
        "Volunteer opportunities",
        "Holiday celebration"
      ],
      speakers: [],
      sponsors: [
        "Local Grocery Stores",
        "Community Organizations",
        "City Government"
      ]
    }
  ]

  const pastEvents = [
    {
      id: "summer-camp-2024",
      title: "Summer Education Camp 2024",
      date: "July 15-30, 2024",
      location: "Rural Community Center",
      description: "A two-week intensive educational program for underprivileged children in rural communities.",
      impact: "150 children served, 20 volunteers involved, 95% improvement in reading skills",
      photos: "Available in our gallery",
      category: "Education"
    },
    {
      id: "health-fair-2024",
      title: "Community Health Fair 2024",
      date: "September 10, 2024",
      location: "City Park",
      description: "Free health screenings and wellness education for the entire community.",
      impact: "500+ people screened, 50 health professionals volunteered, 200+ referrals made",
      photos: "Available in our gallery",
      category: "Healthcare"
    },
    {
      id: "fundraiser-2024",
      title: "Spring Fundraiser 2024",
      date: "April 20, 2024",
      location: "Downtown Convention Center",
      description: "Annual spring fundraising event to support our programs and initiatives.",
      impact: "$250,000 raised, 400 attendees, 15 corporate sponsors",
      photos: "Available in our gallery",
      category: "Fundraising"
    }
  ]

  const eventCategories = [
    { id: "all", name: "All Events", count: upcomingEvents.length + pastEvents.length },
    { id: "fundraising", name: "Fundraising", count: upcomingEvents.filter(e => e.category === "Fundraising").length + pastEvents.filter(e => e.category === "Fundraising").length },
    { id: "training", name: "Training", count: upcomingEvents.filter(e => e.category === "Training").length + pastEvents.filter(e => e.category === "Training").length },
    { id: "community", name: "Community Service", count: upcomingEvents.filter(e => e.category === "Community Service").length + pastEvents.filter(e => e.category === "Community Service").length },
    { id: "education", name: "Education", count: pastEvents.filter(e => e.category === "Education").length },
    { id: "healthcare", name: "Healthcare", count: pastEvents.filter(e => e.category === "Healthcare").length }
  ]

  return (
    <Layout>
      <SEO title="Events" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Our <span className="highlight">Events</span>
              </h1>
              <p className="hero-description">
                Join us at our upcoming events and be part of the positive change we're creating 
                in communities worldwide. From fundraisers to volunteer training, there's something for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Event Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Event Categories</h2>
            <p>Find events that match your interests and availability</p>
          </div>
          
          <div className="categories-grid">
            {eventCategories.map((category) => (
              <div key={category.id} className="category-card fade-in">
                <h3>{category.name}</h3>
                <div className="category-count">{category.count} events</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Upcoming Events</h2>
            <p>Mark your calendar and join us at these exciting upcoming events</p>
          </div>
          
          <div className="events-detailed-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-detailed-card fade-in">
                <div className="event-header">
                  <div className="event-category">{event.category}</div>
                  <div className="event-date-time">
                    <FaCalendarAlt /> {event.date}
                    <br />
                    <FaClock /> {event.time}
                  </div>
                </div>
                
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-location">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>{event.location}</strong>
                    <br />
                    {event.address}
                  </div>
                </div>
                
                <div className="event-details">
                  <div className="detail-row">
                    <span className="detail-label">Price:</span>
                    <span className="detail-value">{event.price}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Capacity:</span>
                    <span className="detail-value">{event.capacity}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Registration Deadline:</span>
                    <span className="detail-value">{event.registrationDeadline}</span>
                  </div>
                </div>
                
                <div className="event-highlights">
                  <h4>Event Highlights</h4>
                  <ul>
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                {event.speakers.length > 0 && (
                  <div className="event-speakers">
                    <h4>Featured Speakers</h4>
                    <ul>
                      {event.speakers.map((speaker, index) => (
                        <li key={index}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {event.sponsors.length > 0 && (
                  <div className="event-sponsors">
                    <h4>Event Sponsors</h4>
                    <div className="sponsors-list">
                      {event.sponsors.map((sponsor, index) => (
                        <span key={index} className="sponsor-tag">{sponsor}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="event-actions">
                  <Link to={`/events/${event.id}`} className="btn">
                    Learn More <FaArrowRight />
                  </Link>
                  <Link to={`/events/${event.id}/register`} className="btn btn-secondary">
                    <FaTicketAlt /> Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="section">
        <div className="container">
          <div className="registration-cta text-center">
            <h2>Ready to Join Us?</h2>
            <p>Register for upcoming events and be part of our mission to create positive change</p>
            <div className="registration-methods">
              <div className="registration-method">
                <FaEnvelope />
                <h4>Email Registration</h4>
                <p>events@hopefoundation.org</p>
              </div>
              <div className="registration-method">
                <FaPhone />
                <h4>Phone Registration</h4>
                <p>(555) 123-4567 ext. 3</p>
              </div>
              <div className="registration-method">
                <FaExternalLinkAlt />
                <h4>Online Registration</h4>
                <p>Available for most events</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-large">
              Contact Events Team
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Past Events</h2>
            <p>Take a look at our recent events and the impact they've made</p>
          </div>
          
          <div className="past-events-grid">
            {pastEvents.map((event) => (
              <div key={event.id} className="past-event-card fade-in">
                <div className="past-event-header">
                  <div className="past-event-category">{event.category}</div>
                  <div className="past-event-date">{event.date}</div>
                </div>
                
                <h3 className="past-event-title">{event.title}</h3>
                <p className="past-event-description">{event.description}</p>
                
                <div className="past-event-location">
                  <FaMapMarkerAlt /> {event.location}
                </div>
                
                <div className="past-event-impact">
                  <h4>Event Impact</h4>
                  <p>{event.impact}</p>
                </div>
                
                <div className="past-event-photos">
                  <h4>Event Photos</h4>
                  <p>{event.photos}</p>
                </div>
                
                <Link to={`/events/${event.id}`} className="btn btn-secondary">
                  View Event Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Event Calendar</h2>
            <p>Stay updated with our upcoming events and important dates</p>
          </div>
          
          <div className="calendar-placeholder">
            <div className="calendar-content">
              <FaCalendarAlt className="calendar-icon" />
              <h3>Interactive Event Calendar</h3>
              <p>Our interactive calendar will be available soon, allowing you to view all events, set reminders, and register directly from the calendar.</p>
              <Link to="/contact" className="btn">
                Get Notified When Available
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="section section-alt">
        <div className="container">
          <div className="host-event text-center">
            <h2>Want to Host an Event?</h2>
            <p>Partner with us to host fundraising events, awareness campaigns, or community gatherings</p>
            <div className="hosting-benefits">
              <div className="benefit-item">
                <FaHeart />
                <h4>Make an Impact</h4>
                <p>Directly contribute to our programs and initiatives</p>
              </div>
              <div className="benefit-item">
                <FaUsers />
                <h4>Build Community</h4>
                <p>Connect with like-minded individuals and organizations</p>
              </div>
              <div className="benefit-item">
                <FaHandHoldingHeart />
                <h4>Get Support</h4>
                <p>Receive guidance and resources from our events team</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-large">
              Start Planning Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Stay Connected</h2>
            <p>
              Don't miss out on our upcoming events! Subscribe to our newsletter to receive 
              updates about new events, registration deadlines, and special announcements.
            </p>
            <div className="cta-actions">
              <Link to="/newsletter" className="btn btn-large">
                Subscribe to Newsletter
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

export default EventsPage 