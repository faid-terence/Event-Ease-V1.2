import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image4 from "../../assets/images/dance3.jpg";
import image2 from "../../assets/images/dance5.jpg";
import image3 from "../../assets/images/dance6.jpg";
import image1 from "../../assets/images/basket3.jpg";
import image5 from "../../assets/images/praise.jpg";
import image6 from "../../assets/images/simba.jpg";

export const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const slides = [
    {
      image: image1,
      title: "Sell and Buy Tickets",
      description: "Discover the best events. Sell and buy tickets seamlessly.",
    },
    {
      image: image2,
      title: "Easy Ticketing Process",
      description: "Effortless ticketing process for all your favorite events.",
    },
    {
      image: image3,
      title: "Download the App",
      description: "Get our app now for a seamless ticketing experience.",
    },
    {
      image: image4,
      title: "Sell and Buy Tickets",
      description: "Discover the best events. Sell and buy tickets seamlessly.",
    },
    {
      image: image5,
      title: "Easy Ticketing Process",
      description: "Effortless ticketing process for all your favorite events.",
    },
    // {
    //   image: image6,
    //   title: "Download the App",
    //   description: "Get our app now for a seamless ticketing experience.",
    // },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-[700px] flex items-center justify-center"
          >
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="container text-center">
                <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
                <p className="text-white text-lg">{slide.description}</p>
                <div className="mt-4">
                  <Link to="/events">
                    <button className="bg-blue-500 text-white px-4 py-2 mr-4">
                      Sell Tickets
                    </button>
                  </Link>
                  <Link to="/events">
                    <button className="bg-green-500 text-white px-4 py-2">
                      Buy Tickets
                    </button>
                  </Link>
                  <div className="mt-4">
                    <a
                      href="link_to_playstore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white mr-4"
                    >
                      <AiFillAndroid size={32} />
                    </a>
                    <a
                      href="link_to_appstore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <AiFillApple size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
