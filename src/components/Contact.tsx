import { useEffect } from "react";
import Line from "./line";

interface TitleProps {
  onTitleHeightChange: (height: number, tipe: string) => void;
}

export default function Contact({ onTitleHeightChange }: TitleProps) {
  useEffect(() => {
    const titleElement = document.querySelector("#contact");
    if (titleElement) {
      onTitleHeightChange(
        titleElement.getBoundingClientRect().height,
        "contact"
      );
    }
  }, [onTitleHeightChange]);
  
  return (
    <div id="contact">
      <Line />
      <div
        className="flex justify-center flex-col text-center my-20"
      >
        <h1 className="text-5xl font-bold">Contact</h1>
        <div className="grid grid-cols-9 my-10  text-neutral-400 text-lg">
          <div className="text-end mx-2 col-span-4">Email</div>
          <div className="text-center ">|</div>
          <div className="text-start mx-2 col-span-4 hover:text-white">
            <a href="mailto:ridhopriambodo558@gmail.com" target="_blank">
              ridhopriam@gmail.com
            </a>
          </div>
          <div className="text-end mx-2 col-span-4">Linkedin</div>
          <div className="text-center ">|</div>
          <div className="text-start mx-2 col-span-4 hover:text-white">
            <a href="https://linkedin.com/in/ridho-priambodo/" target="_blank">
              linkedin.com/in/ridho-priambodo/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
