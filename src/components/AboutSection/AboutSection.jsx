import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="about-section py-5 md:ml-72 flex flex-col gap-10 md:flex-row justify-center bg-[#1E293B] text-white"
    >
      <div className="md:w-1/2 p-3 md:p-10 self-center flex flex-col">
        <img
          src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1716535454/Portfolio-Website/about-section-2_xus1g7.svg"
          alt="about-img"
          className="about-img w-[250px] md:w-[450px] self-center"
        />
      </div>
      <div className="md:w-1/2 p-3 md:p-10 self-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          About <span className="text-[#2196f3]">Me</span>
        </h1>
        <p className="mt-10">
          I&apos;ve been building stuff with the MERN stack for a while now.
          Before that, I spent a year working with WordPress. And even before
          that, I was into graphic design for about three years.
        </p>
        <p className="mt-5">
          I&apos;m proficient in Frontend skills like React.js, Html, Css,
          JavaScript, Tailwind Css, Bootstrap. In backend I know Node.js,
          Express.js, MongoDB and Mongoose.
        </p>
        <p className="mt-5">
          I focus on creating websites and apps using the MERN stack. I like to
          make things work smoothly and look nice. Before diving into coding, I
          did some work with WordPress, and even before that, I was all about
          making things look pretty as a graphic designer.
        </p>
        <div className="mt-10 flex gap-5">
          <a
            href="https://www.linkedin.com/in/manibct/"
            target="_blank"
            className="text-4xl text-[#2196f3] hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Manii1997"
            target="_blank"
            className="text-4xl text-[#2196f3] hover:text-white"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.behance.net/manikandanc"
            target="_blank"
            className="text-4xl text-[#2196f3] hover:text-white"
          >
            <FaBehanceSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
