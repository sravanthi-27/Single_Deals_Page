import React from "react";
import img from "../assets/weui_arrow-filled (1).svg";
import headerImage from "../assets/d1.png";

const HeaderSection = ({ imageUrl }) => {
  const imageToDisplay = imageUrl || headerImage;

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Large Desktop Version - Visible on screens > 1024px */}
      <div className="justify-between hidden lg:flex relative bg-white w-full max-w-[1280px] h-auto md:h-[530px] mt-[100px] overflow-visible ml-[150px] xl:ml-[50px] ">
        <div className="relative -left-[20px]">
          <div className="w-[432px] h-[432px] flex-shrink-0 rounded-[20px] border border-[#888] overflow-hidden relative mt-9">
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 77.4%, rgba(0, 0, 0, 0.50) 100%)",
              }}
            ></div>
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `url(${imageToDisplay}) center/cover no-repeat #D9D9D9`,
              }}
            ></div>
          </div>
        </div>

        <div className="absolute top-5 -left-[90px] pl-[470px] md:pl-[550px] pr-6 h-full flex flex-col justify-start w-full mt-2">
          <h1 className="text-[#2D2D2D] font-montserrat uppercase font-bold text-[48px] xl:text-[48px] leading-[140%] text-left max-w-[783px]">
            Midweek Calm – ₹ 20% Off All Bookings
          </h1>

          <p className="text-[#4D4D4D] font-montserrat text-[16px] xl:text-[18px] font-normal mb-2 max-w-[700px] text-left">
            Take a mindful pause midweek. Book any session and enjoy 20%
            off—because calm shouldn't wait for the weekend.
          </p>

          <p className="font-montserrat font-normal text-[15px] xl:text-[20px] leading-[125%] text-[#4D4D4D] -mb-2">
            by{" "}
            <span className="font-montserrat font-normal text-[#2D2D2D] underline decoration-solid underline-offset-2">
              INNERSTUDIO GLOW
            </span>
          </p>
          <br />
          <p>
            <span className="text-[#4D4D4D] font-montserrat text-[14px] xl:text-[16px] font-normal underline underline-offset-4 mb-4 max-w-[700px] text-left">Fitness & Body Movement</span>
            <span className="text-[#4D4D4D] font-montserrat text-[14px] xl:text-[16px] font-normal mb-4 max-w-[700px] text-left"> / </span> 
            <span className="text-[#4D4D4D] font-montserrat text-[14px] xl:text-[16px] font-normal underline underline-offset-4 mb-4 max-w-[700px] text-left">Yoga</span>
          </p>

          <div className="flex items-center gap-2 mt-4 mb-4 max-w-[700px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="none"
            >
              <path
                d="M17.4993 16.7708C16.5324 16.7708 15.6051 16.3867 14.9214 15.703C14.2376 15.0192 13.8535 14.0919 13.8535 13.125C13.8535 12.158 14.2376 11.2307 14.9214 10.547C15.6051 9.86324 16.5324 9.47913 17.4993 9.47913C18.4663 9.47913 19.3936 9.86324 20.0773 10.547C20.7611 11.2307 21.1452 12.158 21.1452 13.125C21.1452 13.6037 21.0509 14.0778 20.8677 14.5202C20.6844 14.9625 20.4159 15.3644 20.0773 15.703C19.7388 16.0415 19.3369 16.3101 18.8945 16.4933C18.4522 16.6765 17.9781 16.7708 17.4993 16.7708ZM17.4993 2.91663C14.7919 2.91663 12.1954 3.99214 10.281 5.90658C8.36653 7.82101 7.29102 10.4175 7.29102 13.125C7.29102 20.7812 17.4993 32.0833 17.4993 32.0833C17.4993 32.0833 27.7077 20.7812 27.7077 13.125C27.7077 10.4175 26.6322 7.82101 24.7177 5.90658C22.8033 3.99214 20.2068 2.91663 17.4993 2.91663Z"
                fill="#DE9636"
              />
            </svg>
            <p className="text-[#4D4D4D] font-montserrat text-[16px] xl:text-[20px] font-medium leading-[110%]">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>

          <button className="flex flex-row items-center justify-center bg-[#121212] text-white text-[16px] md:text-[18px] px-6 py-3 rounded-md hover:bg-gray-800 transition w-[180px] md:w-[200px] h-[50px] md:h-[60px]">
            GET THIS DEAL
            <img
              className="w-[10px] md:w-[11px] h-[18px] md:h-[20px] ml-2 opacity-100"
              src={img}
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-full max-w-[1280px] h-px bg-gray-300 mx-auto my-[50px] px-8"></div>

      {/* 2. New Tablet Version - Visible between 768px and 1024px */}
      <div className="hidden md:flex lg:hidden flex-col items-center w-full mt-[100px] px-10">
        <div className="flex flex-col md:flex-row w-full items-start gap-8">
          <div className="w-full md:w-1/2 min-w-[350px] min-h-[350px] aspect-square rounded-[8.166px] border border-[#888] overflow-hidden mt-[10px]">
            <div
              className="relative w-full h-full"
              style={{
                background: `url(${imageToDisplay}) center/cover no-repeat`,
              }}
            ></div>
          </div>
          <div className="flex-grow pt-3 ">
            <h1 className="text-[#2D2D2D] font-inter uppercase font-bold text-[24px] leading-tight mb-2">
              Midweek Calm – ₹ 20% Off All Bookings
            </h1>
            <p className="text-[#4D4D4D] font-montserrat text-base font-normal mb-2">
              Take a mindful pause midweek. Book any session and enjoy 20%
              off—because calm shouldn't wait for the weekend.
            </p>
            <p className="font-montserrat font-normal text-[15px] leading-[125%] text-[#4D4D4D] mb-2">
              by{" "}
              <span className="font-montserrat text-[#2D2D2D] font-normal underline decoration-solid underline-offset-2">
                INNERSTUDIO GLOW
              </span>
            </p>
            <p className="mb-4">
              <span className="text-[#2D2D2D] font-montserrat text-[15px] font-normal underline underline-offset-4 mb-4">Fitness & Body Movement</span>
              <span className="text-[#2D2D2D] font-montserrat text-[15px] font-normal mb-4"> / </span>
              <span className="text-[#2D2D2D] font-montserrat text-[15px] font-normal underline underline-offset-4 mb-4">Yoga</span>
            </p>
            <div className="flex items-start gap-1 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 26 35">
                <path d="M14 13.5c-.99 0-1.94-.39-2.651-1.1A3.754 3.754 0 0 1 10.5 8.75c0-.99.39-1.94 1.1-2.651A3.754 3.754 0 0 1 14 5c.99 0 1.94.39 2.651 1.1A3.754 3.754 0 0 1 17.5 8.75c0 .5-.1.99-.29 1.44a3.812 3.812 0 0 1-.856 1.217A3.812 3.812 0 0 1 14 13.5Zm0-10.125C11.166 3.375 8.583 4.542 6.643 6.482c-1.94 1.94-3.107 4.523-3.107 7.356 0 8.75 10.464 19.375 10.464 19.375s10.464-10.625 10.464-19.375c0-2.833-1.167-5.416-3.107-7.356A11.472 11.472 0 0 0 14 3.375Z" fill="#DE9636"/>
              </svg>
              <p className="text-[#4D4D4D] font-montserrat text-lg">
                Sector 45, Gurugram, Haryana 122018, India
              </p>
            </div>
            <button className="flex flex-row items-center justify-center bg-[#121212] text-white text-[16px] md:text-[18px] px-6 py-4 rounded-md hover:bg-gray-800 transition w-[180px] md:w-[200px] h-[50px] md:h-[60px]">
              GET THIS DEAL
              <img
                className="w-[10px] md:w-[11px] h-[18px] md:h-[20px] ml-2 opacity-100"
                src={img}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden w-full max-w-[950px] h-px bg-gray-300 mx-auto mt-[50px]"></div>

      {/* 3. Small Screen & Mobile - Visible on screens < 768px */}
      <div className="block md:hidden bg-white w-full mt-[70px]">
        <div className="w-full flex justify-center">
          <div
            className="w-full h-full flex-shrink-0 aspect-square"
            style={{
              background: `url(${imageToDisplay}) center/cover no-repeat`,
            }}
          ></div>
        </div>

        <div className="px-4 pt-4 pb-8">
          <h1 className="text-[#2D2D2D] font-inter uppercase font-extrabold text-[24px] mb-3 leading-tight">
            Midweek Calm – ₹ 20% Off All Bookings
          </h1>
          <p className="text-[#4D4D4D] font-montserrat text-[12px] font-normal mb-3">
            Take a mindful pause midweek. Book any session and enjoy 20% off—because calm shouldn't wait for the weekend.
          </p>
          <p className="font-montserrat font-normal text-[12px] mb-4 text-[#4D4D4D]">
            by{" "}
            <span className="font-montserrat font-normal text-[12px] text-[#2D2D2D] underline decoration-solid underline-offset-2">
              INNERSTUDIO GLOW
            </span>
          </p>
          <p>
            <span className="text-[#2D2D2D] font-montserrat text-[14px] font-normal underline underline-offset-2 mb-3">Fitness & Body Movement</span>
            <span className="text-[#2D2D2D] font-montserrat text-[14px] font-normal underline underline-offset-2 mb-3"> / </span>
            <span className="text-[#2D2D2D] font-montserrat text-[14px] font-normal underline underline-offset-2 mb-3">Yoga</span>
          </p>   
          <div className="flex items-start gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                d="M10 9.5c-.57 0-1.125-.227-1.53-.63A2.156 2.156 0 0 1 7.84 7.34c0-.57.226-1.125.63-1.53A2.156 2.156 0 0 1 10 5.18c.57 0 1.125.227 1.53.63.403.405.63.96.63 1.53 0 .287-.057.57-.179.83a2.18 2.18 0 0 1-.493.697A2.18 2.18 0 0 1 10 9.5ZM10 2c-1.413 0-2.769.562-3.77 1.562C5.229 4.563 4.667 5.92 4.667 7.333C4.667 12.333 10 18 10 18s5.333-5.667 5.333-10.667c0-1.413-.562-2.77-1.562-3.771A5.321 5.321 0 0 0 10 2Z"
                fill="#DE9636"
              />
            </svg>
            <p className="text-[#4D4D4D] font-montserrat text-[12px]">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>
          <button className="flex flex-row items-center justify-center bg-[#121212] text-white text-[14px] px-5 py-2 rounded-md mb-6 w-full max-w-[200px]">
            GET THIS DEAL
            <img
              className="w-[12px] h-[20px] ml-2 opacity-100"
              src={img}
              alt="arrow"
            />
          </button>
          <div className="w-screen h-px bg-[#A2A2A2] mt-[50px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;