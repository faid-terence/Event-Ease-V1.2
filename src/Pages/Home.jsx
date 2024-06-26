import React from "react";
import eventImage from "../assets/event.png";
import eventImage2 from "../assets/event2.png";
import eventImage3 from "../assets/event3.png";
import icon1 from "../assets/icon01.png";
import icon2 from "../assets/icon02.png";
import icon3 from "../assets/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import paymentMethods from "../assets/mtn1.png";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { SubScribe } from "../components/Subscribe/SubScribe";
import { HeroSlider } from "../components/Hero/HeroSLider";
import { PopUp } from "../components/POPUPS/PopUp";
import { TickNetAbout } from "../components/About/TicknetAbout";

export const Home = () => {
  return (
    <>
      <HeroSlider />
      {/* <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Making Event Tickets Available Everywhere
                </h1>
                <p className="text_para">
                  Meet TickNet, your hassle-free ticketing solution. No more
                  queues – just the joy of securing event tickets from your home
                  with a few clicks. Discover a diverse range of events, from
                  concerts to sports, all on a user-friendly platform. TickNet
                  ensures a secure and efficient process, with personalized
                  recommendations based on your interests. Say goodbye to the
                  ordinary ticket-buying experience; TickNet transforms it into
                  an exciting journey, where anticipation begins the moment you
                  click 'purchase.' Welcome to the future of ticketing – welcome
                  to TickNet.
                </p>
                <button className="btn">Explore More !</button>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={eventImage} alt="" className="" />
              </div>
              <div className="mt-[30px]">
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best Event Management Services
            </h2>
            <p className="text_para text-center">
              TickNet: Your key to seamless events! From corporate functions to
              private celebrations, trust us for meticulous planning, innovative
              execution, and unforgettable experiences
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px] ">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon1} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Create Event
                  </h2>
                  <p className="text_para text-center">
                    Create standout events effortlessly with TickNet! Our
                    user-friendly platform offers seamless event planning, from
                    easy registrations to real-time management. Elevate your
                    events with TickNet's intuitive tools and reliable support.
                    Your success, simplified.
                  </p>
                  <Link
                    to="/create-event"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon2} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Events Near You
                  </h2>
                  <p className="text_para text-center">
                    Create standout events effortlessly with TickNet! Our
                    user-friendly platform offers seamless event planning, from
                    easy registrations to real-time management. Elevate your
                    events with TickNet's intuitive tools and reliable support.
                    Your success, simplified.
                  </p>
                  <Link
                    to="/events"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon3} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Event Tickets
                  </h2>
                  <p className="text_para text-center">
                    Create standout events effortlessly with TickNet! Our
                    user-friendly platform offers seamless event planning, from
                    easy registrations to real-time management. Elevate your
                    events with TickNet's intuitive tools and reliable support.
                    Your success, simplified.
                  </p>
                  <Link
                    to="/events"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      {/* <TickNetAbout /> */}
      <SubScribe />
    </>
  );
};
