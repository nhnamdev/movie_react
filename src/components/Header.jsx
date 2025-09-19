import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #1f2937',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left Side - Logo & Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Logo */}
        <div>
          <img
            style={{
              width: '120px',
              height: '50px',
              objectFit: 'contain',
            }}
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '32px',
            }}
          >
            <li>
              <a
                href="#"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#ef4444';
                  e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'white';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#ef4444';
                  e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'white';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Phim Lẻ
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#ef4444';
                  e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'white';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Phim Bộ
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#ef4444';
                  e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'white';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Thể Loại
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Side - Search */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            style={{
              width: '320px',
              height: '42px',
              padding: '0 48px 0 16px',
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              outline: 'none',
              transition: 'all 0.3s ease',
            }}
            onFocus={e => {
              e.target.style.borderColor = '#ef4444';
              e.target.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.2)';
            }}
            onBlur={e => {
              e.target.style.borderColor = '#374151';
              e.target.style.boxShadow = 'none';
            }}
          />

          {/* Search Icon */}
          <svg
            style={{
              position: 'absolute',
              right: '12px',
              width: '20px',
              height: '20px',
              color: '#9ca3af',
              pointerEvents: 'none',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <button
          style={{
            height: '42px',
            padding: '0 24px',
            background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.4)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 2px 8px rgba(220, 38, 38, 0.3)';
          }}
        >
          <svg
            style={{ width: '16px', height: '16px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default Header;
