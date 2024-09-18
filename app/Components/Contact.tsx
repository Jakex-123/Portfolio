"use client";
import React, { useState, useRef } from "react";
import * as z from "zod";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/Context/ThemeProvider";

const Contact = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<any>({});

  const contactValidationSchema = z.object({
    name: z.string().min(6, "Name must be at least 6 characters long").max(256),
    email: z.string().email("Invalid email address"),
    message: z.string().min(8, "Message must be at least 8 characters long")
  });

  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const validate = contactValidationSchema.safeParse({ name, email, message });

    if (validate.success) {
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      // Set errors
      const errorMap = validate.error.format();
      setErrors({
        name: errorMap.name?._errors[0],
        email: errorMap.email?._errors[0],
        message: errorMap.message?._errors[0],
      });
    }
  };

  const { mode } = useTheme();

  return (
    <>
    <section id="contact" className="mx-auto mt-24 md:mt-32 pb-10">
      <h2 className="font-heading text-3xl font-semibold md:text-5xl text-center about dark:text-primaryText text-lightPrimaryText">
        Send me a message!
      </h2>
      <p className="font-body font-thin text-center lg:text-xl max-w-[70%] md:max-w-[40%] mx-auto dark:text-secondaryText text-lightSecondaryText">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="font-body mt-16 flex flex-col gap-4 md:gap-10 items-center justify-center w-[80%] md:w-[60%] mx-auto"
      >
        <div className="flex flex-col sm:flex-row w-full flex-grow gap-4 lg:gap-14 justify-between">
          <div className="w-full">
            <label className="absolute" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="user_name"
              className="w-full outline-none mt-6 relative p-[0.6rem] pl-0 bg-transparent border-b border-black dark:border-white block"
              type="text"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="w-full">
            <label className="absolute" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="user_email"
              className="w-full overflow-visible outline-none mt-6 relative p-[0.6rem] pl-0 bg-transparent border-b border-black dark:border-white block"
              type="email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>
        <div className="flex w-full flex-grow justify-center">
          <div className="w-full">
            <label className="absolute" htmlFor="message">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              className="w-full mt-6 outline-none relative p-[0.6rem] pl-0 bg-transparent border-b dark:border-white border-black block"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="font-semibold mt-6 relative overflow-hidden flex items-center justify-center px-14 md:px-32 py-4 border border-black dark:border-white transition-all ease-out duration-500 hover:dark:text-gray-100 hover:text-white group"
        >
          SHOOT <span className="text-2xl">&#8594;</span>
          <span className="absolute -inset-1 dark:bg-accentPurple bg-lightSecondaryText transition-transform duration-300 transform translate-x-[-100%] group-hover:translate-x-0 z-[-1]"></span>
        </button>
      </form>
      <hr className="mt-16 md:mt-20" />
    </section>
    <footer className="w-full flex flex-col justify-center gap-5 md:flex-row md:justify-between items-center mb-10">

    <div className=" md:w-1/3 shadow-custom-shadow">
      <Image
        className="mx-auto md:mx-0"
        src={`${mode === "dark" ? "/logo.png" : "/light-logo.png"}`}
        width={50}
        height={50}
        priority={true}
        alt="logo"
      />
    </div>
    <p className="w-full md:w-1/3 md:text-base text-sm order-2 md:order-none text-center">
      <span>&#169;</span> Copyright 2024
    </p>
    <div className="w-full md:w-1/3 flex items-center justify-center gap-4 order-1 md:order-none">
      <Link aria-label="Linkedin" href={"https://www.linkedin.com/in/aditya-gupta128/"} target="_blank">
        <i className="fa-lg fa-brands fa-linkedin"></i>
      </Link>
      <Link aria-label="Github" href={"https://github.com/Jakex-123"} target="_blank">
        <i className="fa-lg fa-brands fa-github"></i>
      </Link>
      <Link aria-label="Instagram" href={"https://www.instagram.com/aditya.gupta03/"} target="_blank">
        <i className="fa-lg fa-brands fa-instagram"></i>
      </Link>
      <Link target="_blank" href={"https://drive.google.com/file/d/1-gYPxNFrhdCqFDQQvN4J_Znwn8ZmUAZp/view?usp=drive_link"}>
        <button className="px-4 h-7 border dark:border-white border-black rounded-full ">
          Resume
        </button>
      </Link>
    </div>
  </footer>
  </>
  );
};

export default Contact;
