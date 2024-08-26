import { useState, useEffect } from "react";
import navbarData from "../../static/adminData.json";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        if (
          sectionTop <= viewportHeight / 2 &&
          sectionBottom >= viewportHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="d-flex justify-content-around m-0 bg-light" >
      <div className="p-0 m-0 mt-2 d-flex">
        <div
          className="d-flex justify-content-center align-items-center me-5 "
          onClick={() => navigate("/")}
          style={{cursor:"pointer"}}
        >
          <a
            className="p-0 m-0 mt-1 px-5  text-uppercase fw-semibold navi bg-orange text-light rounded p-1"
            style={{ whiteSpace: "nowrap" }}
          >
            User Panel
          </a>
        </div>
       
      </div>
      <div className="d-flex ">
        {navbarData.data.map((item, index) => (
          <a
            key={index}
            href={`#${item.link}`}
            className={`p-0 m-0 mt-1 p-4 text-uppercase fs-6 fw-semibold navi ${
              activeSection === item.link ? "active" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
