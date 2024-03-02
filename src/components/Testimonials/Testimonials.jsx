import React from "react";
import "./Testimonials.css";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clientImage from "../../assets/terence 1.png";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="text-white text-4xl font-bold grow shrink basis-auto mt-3 max-md:max-w-full">
            What Our clients say ?
          </h2>
        </div>
        <Swiper
          loop={true}
          direction="horizontal"
          grabCursor={true}
          spaceBetween={50}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
        >
          <div className="testimonial-content">
            <div className="js-testimonial-slider">
              <div className="">
                <SwiperSlide>
                  <div className=" testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </div>
        </Swiper>
        <div className="swiper-pagination js-testimonial-pagination"></div>
      </div>
    </section>
  );
};
