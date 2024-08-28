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
    <div id="title" className="flex flex-row justify-between my-36">
      <div className="flex flex-col text-5xl font-medium justify-center me-32">
        <h1>Ridho</h1>
        <h1 className="my-3">Full Stack Developer</h1>
        <hr style={{ width: 200 + "px", color: "white" }} className="my-3" />
        <p className="text-sm text-neutral-400 my-3">
          I develop end-to-end web applications, manage both frontend and
          backend systems, and ensure seamless integration between technologies.
        </p>
        <div className="flex mt-3">
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

      <img src={me} alt="" width={300} />
    </div>
  );
}
