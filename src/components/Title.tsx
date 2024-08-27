import { useEffect } from "react";

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
              src="src\assets\mdi_github.png"
              className="mx-1 hover:w-10"
              alt="github"
              width={36}
            />
          </a>
          <a href="https://linkedin.com/in/ridho-priambodo/" target="_blank">
            <img
              src="src\assets\mdi_linkedin.png"
              className="mx-1 hover:w-10"
              alt="linkedin"
              width={36}
            />
          </a>
          <a href="mailto:ridhopriambodo558@gmail.com">
            <img
              src="src\assets\email.png"
              className="mx-1 hover:w-10"
              alt="email"
              width={36}
            />
          </a>
        </div>
      </div>

      <img src="src\assets\me.png" alt="" width={300} />
    </div>
  );
}
