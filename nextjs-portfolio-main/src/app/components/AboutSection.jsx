"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python / PyTorch</li>
        <li>Machine Learning & Deep Learning</li>
        <li>Neural Networks (CNNs, sequence models)</li>
        <li>JavaScript / TypeScript</li>
        <li>SQL</li>
        <li>Java</li>
        <li>C</li>
        <li>HTML / CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.A.Sc. in Computer Science (Co-op) (2021 - 2026)</li>
        <ul>
          <li>McMaster University</li>
        </ul>
        <li>High School Diploma - AP (2019 - 2021)</li>
        <ul>
          <li>American International School of Cape Town</li>
        </ul>
        <li>Cambridge Assessment International Education (2017 - 2019)</li>
        <ul>
          <li>C.A.T</li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Awards & Certifications",
    id: "awards-certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>{"Dean's Honour List (2021 - 2026)"}</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Computer Science student at McMaster University focused on
            AI-driven and data-centric software development, with interests in
            machine learning, data privacy, and secure system design. I enjoy
            applying AI techniques within production software systems, working
            collaboratively, and contributing to teams that build reliable,
            intelligent, and impactful technology.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <div className="flex flex-row justify-start">
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
              selectTab={() => handleTabChange("awards-certifications")}
              active={tab === "awards-certifications"}
            >
              {" "}
              Awards & Certifications{" "}
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
