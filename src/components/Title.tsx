import { useEffect } from "react";
import linkedinIcon from '../assets/mdi_linkedin.png';
import githubIcon from '../assets/mdi_github.png';
import emailIcon from '../assets/email.png';
import me from '../assets/me.png';

interface TitleProps {
  onTitleHeightChange: (height: number,tipe:string) => void;
}

export default function Title({ onTitleHeightChange }: TitleProps) {
  useEffect(() => {
    const titleElement = document.querySelector("#title");
    if (titleElement) {
      onTitleHeightChange(titleElement.getBoundingClientRect().height,"title");
    }
  }, [onTitleHeightChange]);

  return (
    <div id="title" className="flex flex-col-reverse sm:flex-row justify-between my-28 sm:my-36 items-center text-center sm:items-start sm:text-start">
      <div className="flex flex-col text-5xl font-medium justify-center xl:me-32 md:me-12 pt-20  sm:pt-0">
        <h1>Ridho</h1>
        <h1 className="my-3 sm:text-5xl text-4xl">Full Stack Developer</h1>
        <hr style={{ width: 200 + "px", color: "white" }} className="my-3 mx-auto sm:mx-0" />
        <p className="text-sm text-neutral-400 my-3 sm:mx-0 mx-14">
          I develop end-to-end web applications, manage both frontend and
          backend systems, and ensure seamless integration between technologies.
        </p>
        <div className="flex mt-3 justify-center sm:justify-normal">
          <a href="https://github.com/dorino24" target="_blank">
            <img
              src={githubIcon}
              className="mx-1 transation ease-in-out hover:scale-125 "
              alt="github"
              width={36}
            />
          </a>
          <a href="https://linkedin.com/in/ridho-priambodo/" target="_blank">
            <img
              src={linkedinIcon}
              className="mx-1 transation ease-in-out hover:scale-125"
              alt="linkedin"
              width={36}
            />
          </a>
          <a href="mailto:ridhopriambodo558@gmail.com">
            <img
              src={emailIcon}
              className="mx-1 transation ease-in-out hover:scale-125"
              alt="email"
              width={36}
            />
          </a>
        </div>
      </div>

      <img src={me} alt="" className="lg:w-80 md:w-64 sm:w-64 w-56" />
    </div>
  );
}
