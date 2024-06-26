import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { TiTags } from "react-icons/ti";
import { FiPenTool } from "react-icons/fi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsSidebarOpen(false); // Close the sidebar after clicking on a menu item
  };

  return (
    <div>
      {/* Mobile nav menu Start */}

      <div className="flex md:hidden fixed justify-between mobile-menu bg-[#1E293B] z-50">
        <div className="flex gap-4">
          <h1 className="self-center text-white name">MANI</h1>
        </div>
        <div className="block md:hidden self-center cursor-pointer">
          <IoMenu
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="menu-icon cursor-pointer text-white"
          />
        </div>
      </div>

      {/* Mobile nav menu End */}

      {/* Desktop sidebar Start */}

      <div
        className={`fixed flex flex-col h-full bg-[#0F172A] transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-72 border-r-2 border-[#1E293B] z-50`}
      >
        {/* Desktop logo Section Start */}
        <div className="flex justify-between bg-[#1E293B] p-5">
          <div className="flex gap-4">
            <h1 className="self-center text-white name">MANI</h1>
          </div>
          <div
            className="block self-center md:hidden cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <IoClose className="close text-white" />
          </div>
        </div>
        {/* Desktop logo Section End */}

        {/* Desktop NavLinks Start */}
        <div className="mt-5 flex flex-col gap-3 p-4 text-white grow">
          <a
            href="/"
            onClick={() => handleMenuClick("/")}
            className={`flex gap-2 p-3 rounded nav-link ${
              activeMenu === "/" ? "bg-[#2196f3]" : ""
            }`}
          >
            <BiHome className="self-center text-xl " />
            Home
          </a>

          <a
            href="#about"
            onClick={() => handleMenuClick("#about")}
            className={`flex gap-2 p-3 rounded nav-link ${
              activeMenu === "#about" ? "bg-[#2196f3]" : ""
            }`}
          >
            <TiTags className="self-center" />
            About
          </a>

          <a
            href="#skills"
            onClick={() => handleMenuClick("#skills")}
            className={`flex gap-2 p-3 rounded nav-link ${
              activeMenu === "#skills" ? "bg-[#2196f3]" : ""
            }`}
          >
            <FiPenTool className="self-center" />
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => handleMenuClick("#projects")}
            className={`flex gap-2 p-3 rounded nav-link ${
              activeMenu === "#projects" ? "bg-[#2196f3]" : ""
            }`}
          >
            <MdOutlineWorkspacePremium className="self-center" />
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => handleMenuClick("#contact")}
            className={`flex gap-2 p-3 rounded nav-link ${
              activeMenu === "#contact" ? "bg-[#2196f3]" : ""
            }`}
          >
            <FaRegUser className="self-center" />
            Contact
          </a>
        </div>
        {/* Desktop NavLinks End */}

        {/* Desktop Social media Links Start */}
        <div className="p-4 flex gap-5">
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
        {/* Desktop Social media Links End */}
      </div>
      {/* Desktop sidebar End */}
    </div>
  );
};

export default Sidebar;
