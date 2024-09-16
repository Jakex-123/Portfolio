"use client";
import React, { useEffect, useRef, useState } from "react";
import { myInformation } from "../lib/myInformation";
import { useGsap } from "@/Context/GSAPContext";


function About() {
  const [heading, setHeading] = useState("Experience");
  const experienceRef = useRef<any>([]);
  const aboutHeadingRef = useRef(null); // Ref for "About Me" heading
  const knowMeRef = useRef(null); // Ref for "Get to know me!" container
  const { gsap, ScrollTrigger } = useGsap(); 

  useEffect(() => {
    // Animate Experience cards
    experienceRef.current.forEach((card:any) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
          end: "top 80%",
          toggleActions: "play none none reverse",
          scrub: 2,
        },
        opacity: 0,
        x: -200,
        duration: 1,
        stagger: 0.2,
      });
    });
    
  }, [heading,gsap,ScrollTrigger]);
  useEffect(()=>{
    if (aboutHeadingRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(aboutHeadingRef.current, {
        scrollTrigger: {
          trigger: aboutHeadingRef.current,
          start: "top 100%",
          end: "top 90%",
          toggleActions: "play none none reverse",
          scrub:2,
        },
        opacity: 0,
        y: 200,
        duration: 1,
      });
    }

    if (knowMeRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(knowMeRef.current, {
        
        scrollTrigger: {
          trigger: knowMeRef.current,
          start: "top 80%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          scrub:2
        },
        opacity: 0,
        x: -200,
        duration: 1.5,
      });
      ScrollTrigger.refresh();
    }
    
  },[gsap,ScrollTrigger])

  return (
    <section
      id="about"
      className="about-section flex flex-col gap-10 items-center pb-16"
    >
      <div className="" ref={aboutHeadingRef}>
        <h2 className="section-title text-3xl font-heading font-semibold md:text-5xl text-center about dark:text-primaryText text-lightPrimaryText">
          About Me
        </h2>
        <span className="section-title block font-body font-thin text-lg md:text-[1.5rem] text-center leading-8 max-w-7xl dark:text-secondaryText text-lightSecondaryText">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </span>
      </div>
      <div className="w-full flex flex-col gap-8 md:flex-row">
        <div className="md:w-[50%]" ref={knowMeRef}>
          <h3 className="text-2xl md:text-4xl font-body font-semibold mb-7 dark:text-primaryText text-lightPrimaryText">
            Get to know me!
          </h3>
          <p className="text-base font-body md:text-lg dark:text-secondaryText text-lightSecondaryText">
            Hi, I’m Aditya Gupta, a passionate software developer with a knack
            for solving complex problems and creating efficient, scalable
            solutions. I specialize in full-stack development. Whether it’s
            building interactive frontend interfaces or managing intricate
            backend systems, I’m driven by a desire to push the limits of what’s
            possible in software development.
            <br />
            <br />
            My expertise spans both frontend and backend development, allowing
            me to craft impactful solutions with a focus on functionality and
            user experience. I’m always up for a challenge, whether it’s
            tackling new technologies or optimizing code for performance.
            <br />
            <br />
            When I’m not coding, I enjoy exploring the latest trends in tech and
            contributing to open-source projects. If you’re interested in
            working together or learning more about what I do, feel free to
            reach out—I’d love to connect!
          </p>
        </div>
        <div className="md:w-[50%] flex flex-col items-center gap-10">
          <div className="inline-flex w-full gap-4 bg-lightInactiveTabBg dark:bg-inactiveTabBg rounded-lg p-2 items-center">
            <div
              onClick={() => setHeading("Experience")}
              className={`hover:dark:bg-hoverTabBg hover:bg-[#e6c6b463] text-center w-full p-[0.75rem 1.5rem] cursor-pointer rounded-md text-xl ${
                heading === "Experience"
                  ? "bg-lightHoverTabBg dark:bg-activeTabBg"
                  : "bg-lightInactiveTabBg dark:bg-inactiveTabBg"
              } rounded-lg p-2`}
            >
              <p className="font-body font-semibold text-lightPrimaryText dark:text-primaryText">
                Experience
              </p>
            </div>
            <div
              onClick={() => setHeading("Skills")}
              className={`text-center p-[0.75rem 1.5rem] cursor-pointer rounded-md w-full text-xl hover:dark:bg-hoverTabBg hover:bg-[#e6c6b463] ${
                heading === "Skills"
                  ? "bg-lightHoverTabBg dark:bg-activeTabBg"
                  : "bg-lightInactiveTabBg dark:bg-inactiveTabBg"
              } rounded-lg p-2`}
            >
              <p className="font-body font-semibold text-lightPrimaryText dark:text-primaryText">
                Skills
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 h-full w-full">
            <h3 className="font-semibold font-mono text-4xl dark:text-primaryText text-lightPrimaryText">
              My {heading}
            </h3>
            {heading === "Experience" && (
              <div className="flex flex-grow flex-wrap gap-4 overflow-y-auto mt-8">
                {Array.isArray(myInformation["Experience"]) ? (
                  myInformation["Experience"].map((item, index) => (
                    <div
                      ref={(el) => (experienceRef.current[index] = el)}
                      key={index}
                      className="experience-card flex-grow w-[15em] p-4 rounded-lg bg-lightInactiveTabBg dark:bg-cardBg"
                    >
                      <sup className="font-semibold font-mono text-lightTertiaryBg dark:text-purple-500">
                        {item.date}
                      </sup>
                      <h3 className="mb-6 font-mono dark:text-primaryText text-lightPrimaryText">
                        {item.position}
                      </h3>
                      <p className="text-accentBlue dark:text-secondaryText font-mono font-semibold">
                        <span className="text-lightTertiaryBg dark:text-purple-500">
                          &#8226;{" "}
                        </span>
                        {item.company}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>{myInformation["Experience"]}</p>
                )}
              </div>
            )}
            {heading === "Skills" && (
              <div className="w-full h-[300px] overflow-y-auto">
                <div className="w-full flex flex-grow flex-wrap gap-3 h-full">
                  {Array.isArray(myInformation["Skills"]) &&
                    myInformation["Skills"].map((item, index) => (
                      <div
                        key={item.name}
                        className="skill-container w-24 h-24 relative flex items-center justify-center bg-lightblueaccent dark:bg-black !mt-8"
                      >
                        <div className="x">
                          <p className="font-body">
                            {item.name === "js"
                              ? "Javascript"
                              : item.name === "html5" || item.name === "css3"
                              ? item.name.toUpperCase()
                              : item.name === "git-alt"
                              ? "Git"
                              : item.name}
                          </p>
                        </div>
                        {item.svg ? (
                          <div className="h-12 w-12 flex items-center justify-center">
                            {item.svg}
                          </div>
                        ) : (
                          <i
                            className={`fa-3x fa-brands text-white fa-${item.name.toLowerCase()}`}
                          ></i>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
