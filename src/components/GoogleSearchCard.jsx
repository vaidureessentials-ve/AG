import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sitelinksData = [
  {
    title: 'Private Label & Bespoke Formulations',
    description: 'Custom formulations & packaging tailored for luxury hospitality and private label personal care.',
    url: '/customization/private-label',
    hasHistoryIcon: true,
  },
  {
    title: 'About VAIDURE - Where Nature Feels Luxurious',
    description: 'VAIDURE is a premium personal care brand crafted for those who value organic elegance and luxury.',
    url: '/about',
    hasHistoryIcon: false,
  },
  {
    title: 'Hospital Amenities & Healthcare Care',
    description: 'Inspired by the delicate nature of healing, VAIDURE provides soothing, dermatologically tested care.',
    url: '/b2b/hospital-amenities',
    hasHistoryIcon: false,
  },
  {
    title: 'Hotel & Resort B2B Hospitality Solutions',
    description: 'Elevate guest experiences with sustainable eco-friendly luxury toiletries and customizable amenity kits.',
    url: '/b2b/hotel-resort',
    hasHistoryIcon: false,
  },
  {
    title: 'Contact Us & Wholesale Inquiries',
    description: "Connect with our hospitality specialists for custom quotes, catalog requests, and sample orders.",
    url: '/contact',
    hasHistoryIcon: false,
  },
  {
    title: 'Eco Materials & Sustainability',
    description: "Biodegradable packaging, zero-plastic initiatives, and eco-friendly luxury solutions for conscious brands.",
    url: '/sustainability/eco-materials',
    hasHistoryIcon: false,
  },
];

const GoogleSearchCard = () => {
  const [searchQuery, setSearchQuery] = useState('VAIDURE luxury hotel amenities');

  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        background: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="reveal"
    >
      {/* Section Title Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem', maxWidth: '700px' }}>
        <span
          style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#681da8',
            background: 'rgba(104, 29, 168, 0.08)',
            padding: '6px 14px',
            borderRadius: '20px',
            display: 'inline-block',
            marginBottom: '1rem',
          }}
        >
          Google Search Indexing Preview
        </span>
        <h2
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '2.25rem',
            color: '#1a1a1a',
            margin: '0 0 0.75rem 0',
            fontWeight: '600',
          }}
        >
          How VAIDURE Appears on Google
        </h2>
        <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
          Optimized with rich snippets, canonical tags, structured JSON-LD data, and sitemaps for maximum search engine visibility.
        </p>
      </div>

      {/* Simulated Search Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.07)',
          border: '1px solid #e0e0e0',
          padding: '1.75rem 2rem',
          fontFamily: 'Roboto, Arial, sans-serif',
          color: '#202124',
          textAlign: 'left',
        }}
      >
        {/* Mock Google Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#f1f3f4',
            borderRadius: '24px',
            padding: '8px 16px',
            marginBottom: '1.5rem',
            border: '1px solid #e0e0e0',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '14px',
              color: '#202124',
              fontFamily: 'Roboto, Arial, sans-serif',
            }}
          />
          <span style={{ fontSize: '11px', color: '#70757a', whiteSpace: 'nowrap', fontWeight: '500' }}>Indexed</span>
        </div>

        {/* Top Header: Favicon & Site Identity */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '13px',
                fontFamily: 'Georgia, serif',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              V
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#202124', lineHeight: '1.2' }}>VAIDURE</div>
              <div style={{ fontSize: '12px', color: '#4d5156', lineHeight: '1.2' }}>https://www.vaidure.com</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', background: '#e6f4ea', color: '#137333', padding: '2px 8px', borderRadius: '10px', fontWeight: '500' }}>Indexed Page</span>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#5f6368',
                fontSize: '16px',
              }}
              aria-label="Options"
            >
              &#8942;
            </button>
          </div>
        </div>

        {/* Main Search Result Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', marginBottom: '6px' }}>
          <Link
            to="/"
            style={{
              color: '#1a0dab',
              fontSize: '20px',
              fontWeight: '400',
              textDecoration: 'none',
              lineHeight: '1.3',
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            VAIDURE: Where Nature Feels Luxurious | Hotel Toiletries & Amenities
          </Link>
        </div>

        {/* Snippet Description */}
        <p
          style={{
            fontSize: '14px',
            color: '#4d5156',
            lineHeight: '1.5',
            margin: '0 0 18px 0',
          }}
        >
          Premium hotel toiletries, organic wet & dry amenities, and custom private label solutions designed for modern luxury hospitality and conscious consumers.
        </p>

        {/* Sitelinks Header */}
        <div style={{ fontSize: '12px', fontWeight: '600', color: '#70757a', letterSpacing: '0.5px', marginBottom: '8px', textTransform: 'uppercase' }}>
          Indexed Site Navigation (Google Sitelinks)
        </div>

        {/* Sitelinks List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {sitelinksData.map((item, index) => (
            <div
              key={index}
              style={{
                borderTop: '1px solid #ebebeb',
                paddingTop: '12px',
                paddingBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.2s ease',
              }}
            >
              <div style={{ paddingRight: '12px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                  <Link
                    to={item.url}
                    style={{
                      color: '#1a0dab',
                      fontSize: '15px',
                      fontWeight: '500',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    {item.title}
                  </Link>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#4d5156',
                    lineHeight: '1.4',
                  }}
                >
                  {item.description}
                </div>
              </div>

              {/* Navigation Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.hasHistoryIcon ? (
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      border: '1px solid #dadce0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a73e8',
                    }}
                    title="Frequently Visited Page"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3.05 11a9 9 0 1 1 .5 4" />
                    </svg>
                  </div>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#70757a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleSearchCard;

