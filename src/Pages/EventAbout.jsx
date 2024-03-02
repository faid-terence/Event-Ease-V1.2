
import React from "react";

export const EventAbout = () => {
  const eventDetails = {
    date: "Every Sunday evening",
    location: "Your Venue Name, Your City",
  };

  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          More About
          <span className="text-[#5AA977] font-bold text-[24px] leading-9">
            Bubbe's Book Club
          </span>
        </h3>
        <p className="text__para">
          Welcome to the enchanting realm of Bubbe's Book Club! Our community
          thrives on the shared passion for literature, embracing readers of all
          backgrounds. {eventDetails.date}, we gather at {eventDetails.location}{" "}
          to explore a curated selection of books, from literary classics to
          contemporary gems. Beyond dissecting plots, our discussions delve into
          the intricacies of themes and the emotional resonance of stories. In
          this dynamic space, diverse perspectives converge, fostering
          connections and deepening our collective understanding. Bubbe's Book
          Club is more than a reading group; it's a celebration of the profound
          impact of words. Join us as we embark on this literary journey
          together, one page at a time.
        </p>
      </div>
    </div>
  );
};
