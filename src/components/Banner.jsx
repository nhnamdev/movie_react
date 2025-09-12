import React from 'react';
import iconRating from '../assets/rating.png';
import iconRatingHalf from '../assets/rating-half.png';
import banner from '../assets/temp-1.jpg';
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/banner.png')",
      }}
      className="w-full h-[700px] bg-center bg-banner-bg bg-no-repeat bg-cover flex items-center justify-center text-white text-4xl font-bold relative"
    >
      <div
        style={{
          backgroundColor: 'black',
        }}
        className="absolute inset-0 bg-black opacity-50 w-full h-[700px]"
      ></div>
      <div
        style={{
          padding: '16px',
        }}
        className="w-full h-[700px] flex items-center justify-center relative space-x-3"
      >
        <div className="">
          <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>
            Chờ em lớn nhé được không?
          </h1>
          <div>
            <img
              style={{ width: '20px', height: '20px', margin: '0 4px' }}
              src={iconRating}
              alt=""
            />
            <img
              style={{ width: '20px', height: '20px', margin: '0 4px' }}
              src={iconRating}
              alt=""
            />
            <img
              style={{ width: '20px', height: '20px', margin: '0 4px' }}
              src={iconRating}
              alt=""
            />

            <img
              style={{ width: '20px', height: '20px', margin: '0 4px' }}
              src={iconRating}
              alt=""
            />
            <img
              style={{ width: '20px', height: '20px', margin: '0 4px' }}
              src={iconRatingHalf}
              alt=""
            />
          </div>
          <p
            style={{
              color: 'white',
              marginTop: '16px',
              width: '500px',
              fontFamily: 'Montserrat, sans-serif',
              lineHeight: '1.5',
            }}
            className="  mt-4 text-lg font-normal text-white w-[500px]"
          >
            Câu chuyện này là dòng thời gian cũng như dòng chảy tình yêu thấm
            vào máu thịt của Hàn Mạt và An Nặc Hàn. Có mấy ai hiểu được, khi
            tình yêu hòa cùng tình thân, khi tình cảm lọt lòng cho đến lúc 18
            tuổi đã luôn có một chàng trai ấm áp, vững chắc ở bên cạnh luôn che
            chở, chiều chuộng và bảo bọc một cô gái như một vật báu trong tay.
          </p>
        </div>

        <div
          style={{
            marginLeft: '25%',
          }}
          className="ml-3"
        >
          <img className="w-[320px] h-[420px]" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
