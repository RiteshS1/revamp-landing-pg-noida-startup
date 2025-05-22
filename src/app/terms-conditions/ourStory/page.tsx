import React from "react";

import Footer from "@/components/Footer";

const ourStory: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start px-4 sm:px-6 md:px-8 py-6 md:py-8 gap-8 md:gap-15 max-w-7xl mx-auto">
        <h1 className="text-gray-600 font-bold text-2xl sm:text-3xl md:text-4xl">Our Story</h1>
        <div className="flex flex-col items-start gap-6 md:gap-10 w-full">
          <div className="flex flex-col items-start gap-6 md:gap-10">
            <h1 className="text-gray-600 font-bold text-lg sm:text-xl">
              Where Technology Meets Wellness
            </h1>
            <p className="tracking-wide sm:tracking-widest text-gray-600 text-base sm:text-lg leading-relaxed">
              At Zenstreet, we're driven by a simple belief: technology has the
              power to elevate the human experience. Our journey began on a
              random Tuesday in March 2024 when our Founder, Ishan, found
              himself musing on an idea—one that could transform everyday
              challenges into opportunities for connection and care. What
              started as a spontaneous thought quickly evolved into passionate
              discussions with longtime friends Srijan and Abhinav. Together,
              these conversations laid the foundation for a venture with a
              purpose beyond profit—a solution co-founded by three friends to
              bring about asymmetrical, positive change in society.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 md:gap-10">
            <h1 className="text-gray-600 font-bold text-lg sm:text-xl">Our Roots</h1>
            <p className="tracking-wide sm:tracking-widest text-gray-600 text-base sm:text-lg leading-relaxed">
              Zenstreet was born out of a desire to make life easier for those
              who help shape our well-being. Initially conceived as a notes
              management platform for therapists, our vision was never limited
              to a single solution. We dreamed of a future where our platform
              would evolve into an interconnected operating system for
              wellness—a vibrant ecosystem where care providers and those in
              need of vetted wellness solutions could seamlessly connect,
              collaborate, and thrive.
            </p>
            <p className="tracking-wide sm:tracking-widest text-gray-600 text-base sm:text-lg leading-relaxed">
              After countless hours of brainstorming and design iterations, our
              journey took concrete form. We registered the Zenstreet.ai domain
              in June 2024, began refining our designs in July, and officially
              incorporated as ISAZEN TECHNOLOGIES PVT LTD in September 2024.
              Today, as we complete Chapter 1 with our MVP phase on track to
              launch in the first week of May—with nearly 80 therapists already
              on our waitlist and three expert advisors by our side—we remain as
              committed as ever to our founding vision.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 md:gap-10">
            <h1 className="text-gray-600 font-bold text-lg sm:text-xl">Our Team</h1>
            <p className="tracking-wide sm:tracking-widest text-gray-600 text-base sm:text-lg leading-relaxed">
              Our team is our backbone. We're proud to be a diverse group of
              passionate developers, innovative designers, and strategic
              marketers who have dedicated countless hours to turning
              Zenstreet's vision into reality. Each key member brings unique
              expertise to the table, from creating cutting-edge technical
              solutions to crafting engaging, user-centered designs. It's this
              collective commitment and collaborative spirit that has helped us
              build a platform designed to empower wellness professionals and
              transform lives.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 md:gap-10">
            <h1 className="text-gray-600 font-bold text-lg sm:text-xl">Looking Ahead</h1>
            <p className="tracking-wide sm:tracking-widest text-gray-600 text-base sm:text-lg leading-relaxed">
              Our journey is just beginning. With Chapter 1 nearly complete,
              we're already setting our sights on the future—crafting visions
              for Chapter 2, Chapter 4, and beyond. Guided by our bootstrapped
              ethos and a commitment to learning from every step, we're
              determined to evolve Zenstreet into a full-fledged wellness
              ecosystem operating system. One that not only supports therapists
              in managing and analyzing notes but also provides an affordable,
              accessible marketplace for a broad spectrum of wellness solutions.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 md:gap-10">
            <h1 className="text-gray-600 font-bold text-lg sm:text-xl">
              Join us as we take it one step at a time, learning and growing to
              create a healthier, more connected world.
            </h1>
            <p className="tracking-wide sm:tracking-widest text-gray-600 text-base sm:text-lg font-bold">
              Team Zenstreet
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F0F0] w-full pt-16 md:pt-25">
        <Footer />
      </div>
    </>
  );
};

export default ourStory;
