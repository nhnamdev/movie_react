import React from 'react';
import PropTypes from 'prop-types';
import Imgtemp from '../assets/temp-1.jpg';

const MovieList = ({ title, data = [] }) => {
  return (
    <div style={{ padding: '24px 20px' }}>
      <h1
        style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '16px',
          margin: '0 0 16px 0',
        }}
      >
        {title}
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingBottom: '16px',
          scrollbarWidth: 'thin',
        }}
      >
        {data.length > 0 &&
          data.map(item => (
            <div
              key={item.id}
              style={{
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => {
                e.target.closest('div').style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.target.closest('div').style.transform = 'scale(1)';
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                }}
              >
                <img
                  src={
                    item.poster_path
                      ? `${import.meta.env.VITE_API_IMAGE_URL}${item.poster_path}`
                      : Imgtemp
                  }
                  alt={item.title || 'Movie'}
                  style={{
                    width: '180px',
                    height: '260px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                />
              </div>

              <div style={{ marginTop: '12px', width: '180px' }}>
                <h2
                  style={{
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.3',
                    margin: '0',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.target.style.color = '#ef4444';
                  }}
                  onMouseLeave={e => {
                    e.target.style.color = 'white';
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    color: '#9ca3af',
                    fontSize: '12px',
                    marginTop: '4px',
                    margin: '4px 0 0 0',
                  }}
                >
                  {item.release_date
                    ? new Date(item.release_date).getFullYear()
                    : 'N/A'}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default MovieList;
