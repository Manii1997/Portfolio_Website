import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import projectsData from "./projectsData.js";

import "./ProjectSection.css";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
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
          {projectsData.map((item) => (
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
                  allowFullScreen
                  height="316"
                  className=" rounded"
                ></iframe>
              )}
              {list.technology && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {list.technology.map((tech, techIndex) => (
                    <p className=" bg-[#0F172A] px-3 py-1.5 rounded-3xl">
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
