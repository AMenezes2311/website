"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, you are more than welcome!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="mailto:andremenezes231@hotmail.com" target="_blank">
            <Image src={EmailIcon} alt="Email Icon" />
          </Link>
          <Link href="https://github.com/amenezes2311" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/andremenezes2002" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Reach out!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Feel free to contact me at any of these below!
        </p>
        <div className="text-[#ADB7BE] mb-4 max-w-md">
          <ul>
            <li><b>Email:</b> andremenezes231@hotmail.com</li>
            <li><b>Mobile:</b> +1 (437) 992-5850</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
