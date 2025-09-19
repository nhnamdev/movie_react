import React from 'react';
import iconRating from '../assets/rating.png';
import iconRatingHalf from '../assets/rating-half.png';
import banner from '../assets/temp-1.jpg';

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content Container */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 40px',
          position: 'relative',
          zIndex: 2,
          gap: '60px',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: 1,
            maxWidth: '600px',
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 20px 0',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            Chờ em lớn nhé được không?
          </h1>

          {/* Rating Stars */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={iconRating}
                alt="star"
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '4px',
                }}
              />
            ))}
            <img
              src={iconRatingHalf}
              alt="half star"
              style={{
                width: '24px',
                height: '24px',
                marginRight: '8px',
              }}
            />
            <span
              style={{
                fontSize: '16px',
                color: '#fbbf24',
                fontWeight: '600',
                marginLeft: '8px',
              }}
            >
              4.5/5
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              color: '#e5e7eb',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '30px',
              fontFamily: 'Arial, sans-serif',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              maxWidth: '550px',
            }}
          >
            Câu chuyện này là dòng thời gian cũng như dòng chảy tình yêu thấm
            vào máu thịt của Hàn Mạt và An Nặc Hàn. Có mấy ai hiểu được, khi
            tình yêu hòa cùng tình thân, khi tình cảm lọt lòng cho đến lúc 18
            tuổi đã luôn có một chàng trai ấm áp, vững chắc ở bên cạnh luôn che
            chở, chiều chuộng và bảo bọc một cô gái như một vật báu trong tay.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <button
              style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.4)';
              }}
            >
              ▶ Xem Phim
            </button>

            <button
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '12px 26px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              ℹ Chi tiết
            </button>
          </div>
        </div>

        {/* Right Content - Movie Poster */}
        <div
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'scale(1.05) rotateY(-5deg)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'scale(1) rotateY(0deg)';
            }}
          >
            <img
              src={banner}
              alt="Movie Poster"
              style={{
                width: '320px',
                height: '420px',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Gradient overlay on poster */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'linear-gradient(135deg, rgba(220, 38, 38, 0.2), transparent 50%)',
                pointerEvents: 'none',
              }}
            ></div>
          </div>

          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
