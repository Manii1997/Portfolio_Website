import React, { useState } from "react";
import { FaHtml5 } from "react-icons/fa";

import "./SkillsSection.css";

const SKILLSDATA = [
  {
    title: "Frontend",
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716602621/Portfolio-Website/front-end_zema86.png",
    skills: [
      {
        skill: "HTML5",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716605622/Portfolio-Website/html-icon_u3fjcl.png",
      },
      {
        skill: "CSS3",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716605622/Portfolio-Website/css-icon_gdfdgp.png",
      },
      {
        skill: "JavaScript",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716605622/Portfolio-Website/javascript-programming-language-icon_hvn1yq.png",
      },
      {
        skill: "Tailwind CSS",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716605622/Portfolio-Website/tailwind-css-icon_cxal4f.png",
      },
      {
        skill: "Bootstrap",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716605627/Portfolio-Website/bootstrap-5-logo-icon_sszxte.png",
      },
      {
        skill: "React.js",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716605622/Portfolio-Website/react-js-icon_crxqmm.png",
      },
    ],
  },
  {
    title: "Backend",
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716602541/Portfolio-Website/coding_vhiq87.png",
    skills: [
      {
        skill: "Node.js",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606886/Portfolio-Website/node-js-icon_gassv3.png",
      },
      {
        skill: "Express",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606887/Portfolio-Website/express-js-icon_ekhcni.png",
      },
      {
        skill: "Python",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606888/Portfolio-Website/python-programming-language-icon_okz2wv.png",
      },
    ],
  },
  {
    title: "Database",
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716602540/Portfolio-Website/database-storage_fmd9au.png",
    skills: [
      {
        skill: "SQLite",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716607429/Portfolio-Website/SQLite_ztrqxf.png",
      },
      {
        skill: "MySQL",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606880/Portfolio-Website/mysql-icon_vwhodx.png",
      },
      {
        skill: "MongoDB",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606880/Portfolio-Website/mongodb-icon_aqjs80.png",
      },
    ],
  },
  {
    title: "Tools",
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716602541/Portfolio-Website/customer-support_a1n4al.png",
    skills: [
      {
        skill: "VS Code",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606884/Portfolio-Website/visual-studio-code-icon_ilgapv.png",
      },
      {
        skill: "GitHub",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606886/Portfolio-Website/github-icon_cp2vmu.png",
      },
      {
        skill: "WordPress",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606884/Portfolio-Website/wordpress-icon_hqc8w1.png",
      },
      {
        skill: "Adobe Photoshop",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606880/Portfolio-Website/adobe-photoshop-icon_v7dfwc.png",
      },
      {
        skill: "Adobe Illustrator",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606880/Portfolio-Website/adobe-illustrator-icon_qagy80.png",
      },
      {
        skill: "Adobe Indesign",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606881/Portfolio-Website/indesign-icon_eoox8a.png",
      },
      {
        skill: "Adobe XD",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606881/Portfolio-Website/adobe-xd-icon_bdkft8.png",
      },
      {
        skill: "Figma",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716606884/Portfolio-Website/figma-icon_eedgt0.png",
      },
      {
        skill: "Postman",
        img: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1716608603/Portfolio-Website/postman-icon_zpjryh.png",
      },
    ],
  },
];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLSDATA[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-section md:ml-72 flex flex-col gap-5 md:flex-row justify-center bg-[#0F172A] text-white py-5">
      <div className="skills-tab p-3 md:w-1/2 md:p-10 self-center">
        <h1 className="text-4xl md:text-6xl font-bold">Skills</h1>
        <div className="flex flex-wrap mt-10 gap-7">
          {SKILLSDATA.map((item) => (
            <div
              key={item.title}
              className={`tab border rounded border-[#2196f3] p-5 md:px-5 md:py-10 cursor-pointer ${
                selectedSkill.title === item.title ? "bg-[#2196f3]" : ""
              }`}
              onClick={() => handleSelectSkill(item)}
            >
              <img
                src={item.icon}
                alt={item.title}
                width={30}
                md:width={50}
                className="skill-tab-icon"
              />
              <p className="font-bold text-2xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container md:self-center border rounded border-[#2196f3] m-3 flex flex-col md:w-1/2">
        <h1 className="font-semibold text-2xl px-5 py-3">
          {selectedSkill.title}
        </h1>
        <hr className="border-[#2196f3]" />
        <div className="skills-list grid grid-cols-2 md:grid-cols-4 gap-4  p-3">
          {selectedSkill.skills.map((skill) => (
            <div className="mt-5 p-4 flex flex-col">
              <p className="font-semibold self-center text-center">
                {skill.skill}
              </p>
              <img
                src={skill.img}
                alt={skill.skill}
                width={50}
                className="mt-3 self-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
