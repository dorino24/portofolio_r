import { useEffect } from "react";
import Line from "./line";

interface TitleProps {
  onTitleHeightChange: (height: number, tipe: string) => void;
}

export default function About({ onTitleHeightChange }: TitleProps) {
  useEffect(() => {
    const titleElement = document.querySelector("#about");
    if (titleElement) {
      onTitleHeightChange(titleElement.getBoundingClientRect().height, "about");
    }
  }, [onTitleHeightChange]);

  return (
    <div id="about">
      <Line />
      <div className="flex justify-center flex-col text-center my-20">
        <h1 className="text-5xl">Hello</h1>
        <p className="text-lg mt-10 mx-32 text-neutral-400">
          Hello! My name is Ridho Priambodo. I'm a recent graduate in Electrical
          Engineering with a specialization in Information and Communication
          Technology. Throughout my academic journey, I was actively involved in
          a variety of activities, including student organizations, independent
          studies, research projects, internships, competitions, and workshops.
          I have a strong interest in full-stack development, data analysis, and
          machine learning. I'm excited to apply my skills and knowledge in
          these areas as I embark on my professional career.
        </p>
      </div>
    </div>
  );
}
