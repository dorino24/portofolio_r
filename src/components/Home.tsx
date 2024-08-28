import About from "./About";
import Contact from "./Contact";
import Footer from "./footer";
// import Line from "./line";
import Nav from "./nav";
import Projects from "./Projects";
import Title from "./Title";
import { useState, useEffect } from "react";

export default function Project() {
  const [scrollY, setScrollY] = useState(0);
  const [titleHeight, setTitleHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [projectHeight, setProjectHeight] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);

  const handleHeightChange = (height: number, tipe: string) => {
    if (tipe === "title") setTitleHeight(height);
    else if (tipe === "about") setAboutHeight(height);
    else if (tipe === "project") setProjectHeight(height);
    else if (tipe === "contact") setContactHeight(height);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto font-oswald text-white">
        <div className="xl:px-52 lg:px-36 md:px-28 sm:px-16">
          <Nav />
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              scrollY >= 0 && scrollY < titleHeight + 50
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <Title onTitleHeightChange={handleHeightChange} />
          </div>
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              scrollY > titleHeight - 100 &&
              scrollY < titleHeight + aboutHeight + 100
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <About onTitleHeightChange={handleHeightChange} />
          </div>
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            scrollY > titleHeight + aboutHeight - 50 &&
            scrollY < titleHeight + aboutHeight + projectHeight + 100
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Projects onTitleHeightChange={handleHeightChange} />
        </div>

        <div
          className={`transition-opacity duration-500 ease-in-out ${
            scrollY > titleHeight + aboutHeight + projectHeight - 100 &&
            scrollY <
              titleHeight + aboutHeight + projectHeight + contactHeight + 100
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Contact onTitleHeightChange={handleHeightChange} />
        </div>
        <Footer />
      </div>
    </>
  );
}
