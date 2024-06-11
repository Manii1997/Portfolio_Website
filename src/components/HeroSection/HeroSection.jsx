import { TypeAnimation } from "react-type-animation";
import { HiOutlineDownload } from "react-icons/hi";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section md:ml-72 flex flex-col gap-10 md:flex-row justify-center bg-[#0F172A] text-white"
    >
      <div className="md:w-1/2 md:p-10 p-3 self-center ">
        <p className="text-2xl md:text-4xl font-bold">
          Hi there! I&apos;m <span className="text-[#2196f3]">Manikandan</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-5">
          I&apos;m a
          <span className="passion text-[#2196f3]">
            <TypeAnimation
              sequence={[
                " MERN Stack",
                1000,
                " Full Stack",
                1000,
                " Web",
                1000,
                " WordPress",
                1000,
              ]}
              speed={30}
              repeat={Infinity}
            />
          </span>
          <br />
          Developer
        </h1>
        <p className="mt-7 md:mt-10">
          Full Stack Developer specializing in the MERN stack. I build dynamic,
          responsive web applications using MongoDB, Express.js, React.js, and
          Node.js.
        </p>
        <a
          href="https://drive.google.com/file/d/1MrTRnThry4DXs3G1xX0RPhzKV_OLFrdS/view"
          target="_blank"
          className="inline-flex"
        >
          <button className="mt-10 px-3 py-2 bg-[#2196f3] flex gap-3 rounded border-2 border-[#2196f3] download-btn">
            Download CV
            <HiOutlineDownload className="self-center" />
          </button>
        </a>
      </div>
      <div className="md:w-1/2 p-3 md:p-10 self-center flex flex-col">
        <img
          src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1716534262/Portfolio-Website/hero-section_urqnxy.svg"
          alt="hero-img"
          className="hero-img w-[350px] md:w-[550px] self-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
