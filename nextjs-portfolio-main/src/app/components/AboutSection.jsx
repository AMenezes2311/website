"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>SQL</li>
        <li>C</li>
        <li>TypeSctript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Rust</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>McMaster University (2021 - 2025)</li>
        <li>Cambridge Assessment International Education (2017 - 2019)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>{"Dean's Honour List (2021 - 2023)"}</li>
        <li>Data security - Z Security (2022)</li>
        <li>AP Scholar Award (2021)</li>
        <li>AP Seminar and Research Certificate (2021)</li>
        <li>Excelence in IT (2020)</li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
                  src="/images/about-image.png"
                  alt="about me image"
                  className="relative fade"
                  width={500}
                  height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a computer science student at McMaster University and a tech enthusiast on my free time.
            My topics of interest include data privacy/security and sofware developing.
            I have recently finished my co-op as a software developer at HamOnt Sports, where I was able to rebuild tech aspects
            of the company in order to increase the number of customers (check out my resume for more info!)
            I also love to work as a team, help those around me, and cooperate to achieve a greater goal. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
