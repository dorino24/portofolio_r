import { useEffect } from "react";
import Line from "./line";

interface TitleProps {
  onTitleHeightChange: (height: number, tipe: string) => void;
}

export default function Project({ onTitleHeightChange }: TitleProps) {
  useEffect(() => {
    const titleElement = document.querySelector("#project");
    if (titleElement) {
      onTitleHeightChange(
        titleElement.getBoundingClientRect().height,
        "project"
      );
    }
  }, [onTitleHeightChange]);

  return (
    <div id="project">
      <Line />
      <div className="my-20">
        <h1 className="text-5xl text-center font-bold">Project</h1>
        <div className="flex  my-10  flex-wrap">
          <div className="max-w-sm my-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Card Image"
            />
          </div>
          <div className="max-w-sm my-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Card Image"
            />
          </div>
          <div className="max-w-sm my-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Card Image"
            />
          </div>
          <div className="max-w-sm my-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Card Image"
            />
          </div>
          <div className="max-w-sm my-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Card Image"
            />
          </div>
          <div className="max-w-sm my-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              alt="Card Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
