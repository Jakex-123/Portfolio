"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { projects } from "../lib/myInformation";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);



const Projects = () => {
  const projectRef = useRef(null);

  useLayoutEffect(() => {
    // Set up the stack card animations
      if (projectRef.current) {
        gsap.from(projectRef.current, {
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 100%",
            end: "top 90%",
            toggleActions: "play none none reverse",
            scrub:2,
          },
          opacity: 0,
          y: 200,
          duration: 2.5,
        });
      }

    const dmStackCards = document.querySelectorAll(".dm-stack-cards");
    const dmStackCardsLength = dmStackCards.length;

    dmStackCards.forEach((dmStackCard, index) => {
      const nextCard = dmStackCards[index + 1];
      const lastCard = dmStackCards[dmStackCards.length - 1];

      if (nextCard) { // Ensure there is a nextCard before setting up the animation
        const scaleOrderValue = (100 - dmStackCards.length) / 100 + ((index + 1) * 0.01);
        const opacityOrderValue = (1 - dmStackCards.length / 10) + ((index + 1) * 0.1);

        gsap.to(dmStackCard, {
          scrollTrigger: {
            trigger: nextCard,
            endTrigger: lastCard,
            start: `0% 50%`,
            end: '100% 50%',
            scrub: true,
            invalidateOnRefresh: true,
            markers: false
          },
          scale: scaleOrderValue,
          opacity: opacityOrderValue
        });
      }
    });
  }, []);

  return (
    <section  ref={projectRef} id="projects" className="mt-16 md:mt-28 pb-16">
      <h2 className="text-3xl font-heading font-semibold md:text-5xl text-center about dark:text-primaryText text-lightPrimaryText">
        Projects
      </h2>
      <div className="mt-10 md:mt-20 flex flex-col gap-24 md:gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`dm-stack-cards dark:bg-cardBg bg-lightCardBg rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:border-2 after:outline-offset-2 after:rounded-3xl after:border-white/20 after:pointer-events-none p-8 md:pt-12 md:px-10 lg:pt-16 lg:px-18 pb-0`}
          >
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: "url('/grain.jpg')" }}
            ></div>
            <div className={`lg:grid lg:grid-cols-2 lg:gap-16`}>
              <div className="lg:pb-16">
                <h3 className="font-body text-2xl md:text-4xl font-bold dark:text-primaryText text-lightPrimaryText mt-2 md:mt-5">
                  {project.name}
                </h3>
                <hr className="border-t-2 dark:border-white/5 border-lightPrimaryText/10 mt-4 md:mt-5" />
                <ul className="h-40 font-body flex flex-col justify-between gap-2 items-start font-medium text-sm md:text-base mb-10 md:mb-0 md:mt-5">
                  {project.description.map((desc:string,index)=>{
                    return <li key={index} className="flex items-baseline  font-body font-normal text-base dark:text-secondaryText text-lightSecondaryText align-bottom"><span className="text-xl">•</span> {desc}</li>
                  })}
                </ul>
                <button className="font-body bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center mt-16 md:mt-8">
                  {project.link} →
                </button>
              </div>
              <div>
                <Image
                  className={`mt-8 -mb-5 lg:mt-0 lg:mb-0 lg:absolute ${project.mobile && "w-40 -mb-24 mx-auto  lg:-right-1 lg:-bottom-10"} lg:h-full lg:w-auto lg:max-w-none`}
                  src={project.image}
                  width={project.mobile?950:1920}
                  height={project.mobile?1920:1080}
                  quality={100}
                  alt="project-img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
