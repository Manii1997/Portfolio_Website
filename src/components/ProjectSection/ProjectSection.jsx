import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import "./ProjectSection.css";

const PROJECTSDATA = [
  {
    title: "React Js",
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1717920021/Portfolio-Website/react_kigcy9.png",
    projectLists: [
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1717760176/Portfolio-Website/project-2_xtc8pt.png",
        projectLink: "https://crud-next-app-m.vercel.app/",
        technology: ["Next Js", "Tailwind CSS", "Local Storage"],
        sourceCode: "https://github.com/Manii1997/crud-next-app",
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1717760176/Portfolio-Website/project-1_bi5uzs.png",
        projectLink: "https://nxttrendzappm.ccbp.tech/",
        technology: [
          "React Js",
          "JavaScript",
          "CSS",
          "Bootstrap",
          "Routing",
          "Local Storage",
          "JWT Token",
          "Authorization",
          "Authentication",
        ],
        sourceCode: "https://github.com/Manii1997/NxtTrendz",
        userCredentials: {
          primeUser: {
            username: "rahul",
            password: "rahul@2021",
          },
          user: {
            username: "raja",
            password: "raja@2021",
          },
        },
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1717825591/Portfolio-Website/project-3_kcycbw.png",
        projectLink: "https://rrapp.ccbp.tech/",
        technology: [
          "React Js",
          "Authentication",
          "React Router",
          "JWT (JSON Web Tokens)",
        ],
        sourceCode: "https://github.com/Manii1997/crud-next-app",
        userCredentials: {
          user: {
            username: "rahul",
            password: "rahul@2021",
          },
        },
      },
    ],
  },
  {
    title: "WordPress",
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1717920021/Portfolio-Website/wordpress_vp0sjd.png",
    projectLists: [
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085991/Portfolio-Website/wp-1_drplby.png",
        projectLink: "https://www.maduraitourstravels.in/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085990/Portfolio-Website/wp-2_iuxm7n.png",
        projectLink: "https://southernholidays.net/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085991/Portfolio-Website/wp-3_uuuuzg.png",
        projectLink: "https://abutoursandtravels.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085991/Portfolio-Website/wp-4_jiq78l.png",
        projectLink: "https://cholagold.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085991/Portfolio-Website/wp-6_k12w94.png",
        projectLink: "https://kcrinternational.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085994/Portfolio-Website/wp-7_ffpeho.png",
        projectLink: "https://neotravelmart.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718086176/Portfolio-Website/wp-8_njdyfi.png",
        projectLink: "https://thanyaas.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085992/Portfolio-Website/wp-9_k5fjzo.png",
        projectLink: "https://tcda.in/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085992/Portfolio-Website/wp-10_wvfpnt.png",
        projectLink: "https://jprexports.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085990/Portfolio-Website/wp-11_rkhktd.png",
        projectLink: "https://sihrsjo.in/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718086096/Portfolio-Website/wp-12_zpqwz3.png",
        projectLink: "https://todosolution.net/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085992/Portfolio-Website/wp-13_upc4ko.png",
        projectLink: "https://prinscafe.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085992/Portfolio-Website/wp-14_ix1nww.png",
        projectLink: "https://lebanonpackersandmovers.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085993/Portfolio-Website/wp-15_akupce.png",
        projectLink: "https://awetechwaterpurifier.in/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085993/Portfolio-Website/wp-16_k6qdz4.png",
        projectLink: "https://cleaningguruhomeservices.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085993/Portfolio-Website/wp-17_crzcay.png",
        projectLink: "https://bennysbiocoir.com/",
        technology: ["WordPress", "Elementor"],
      },
      {
        projectImg:
          "https://res.cloudinary.com/drdl4pdnx/image/upload/v1718085993/Portfolio-Website/wp-18_crnr9x.png",
        projectLink: "https://ssfashions.net/",
        technology: ["WordPress", "Elementor"],
      },
    ],
  },
  {
    title: "Designs",
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1717920021/Portfolio-Website/web-design_cgd8iy.png",
    projectLists: [
      {
        behance: "https://www.behance.net/embed/project/66758921?ilo0=1",
      },
      {
        behance: "https://www.behance.net/embed/project/105896223?ilo0=1",
      },
      {
        behance: "https://www.behance.net/embed/project/105896123?ilo0=1",
      },
      {
        behance: "https://www.behance.net/embed/project/112583781?ilo0=1",
      },
      {
        behance: "https://www.behance.net/embed/project/129236829?ilo0=1",
      },
      {
        behance: "https://www.behance.net/embed/project/134490611?ilo0=1",
      },
      {
        behance: "https://www.behance.net/embed/project/135252377?ilo0=1",
      },
      {
        behance: "https://www.behance.net/embed/project/148851087?ilo0=1",
      },
    ],
  },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(PROJECTSDATA[0]);
  const handleSelectProject = (data) => {
    setSelectedProject(data);
  };

  return (
    <section
      id="projects"
      className="project-section py-5 md:ml-72 flex flex-col gap-10 bg-[#1E293B] text-white"
    >
      <div className="p-3 flex flex-col">
        <h1 className="text-4xl md:text-6xl font-bold self-center">Projects</h1>
        <div className="flex flex-wrap mt-10 gap-5 self-center">
          {PROJECTSDATA.map((item) => (
            <div
              key={item.title}
              className={`project-tab border flex-grow rounded border-[#2196f3] p-4 md:px-5 cursor-pointer ${
                selectedProject.title === item.title ? "bg-[#2196f3]" : ""
              }`}
              onClick={() => handleSelectProject(item)}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="project-tab-icon w-[30px]"
              />
              <p className="font-semibold text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="project-lists mt-10 flex flex-col md:flex-row flex-wrap gap-10 md:gap-0">
          {selectedProject.projectLists.map((list, index) => (
            <div
              key={index}
              className="project-list w-full md:p-4 md:w-1/4 flex flex-col"
            >
              {list.projectImg && (
                <div>
                  <img
                    src={list.projectImg}
                    alt="project"
                    className="project-img w-full md:w-[400px] rounded"
                  />
                </div>
              )}
              {list.behance && (
                <iframe
                  src={list.behance}
                  allowfullscreen
                  height="316"
                  className=" rounded"
                ></iframe>
              )}
              {list.technology && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {list.technology.map((tech, techIndex) => (
                    <p
                      key={techIndex}
                      className=" bg-[#0F172A] px-3 py-1.5 rounded-3xl"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              )}
              {list.userCredentials && (
                <div className="mt-3">
                  {list.userCredentials.primeUser && (
                    <p>
                      <span className="font-semibold">
                        Prime User Login Details:
                      </span>
                      <br />
                      <span className="font-semibold">Username: </span>
                      {`${list.userCredentials.primeUser.username}`},{" "}
                      <span className="font-semibold">Password: </span>
                      {`${list.userCredentials.primeUser.password}`}
                    </p>
                  )}
                  {list.userCredentials.user && (
                    <p>
                      <span className="font-semibold">Login Details: </span>
                      <br />
                      <span className="font-semibold">Username: </span>
                      {`${list.userCredentials.user.username}`},{" "}
                      <span className="font-semibold">Password: </span>
                      {`${list.userCredentials.user.password}`}
                    </p>
                  )}
                </div>
              )}
              <div className="flex mt-5 gap-5">
                {list.projectLink && (
                  <a
                    href={list.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-3 py-2 text-white rounded flex items-center"
                  >
                    Live Link
                    <FaLink className="ml-2" />
                  </a>
                )}
                {list.sourceCode && (
                  <a
                    href={list.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info px-3 py-2 text-white rounded flex items-center"
                  >
                    Source Code
                    <FaGithub className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
