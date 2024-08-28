import { useEffect } from "react";
import Line from "./line";
import expand from "../assets/bx_expand.png";
import { useNavigate } from "react-router-dom";
import images from "./data";
// Inside your component



interface TitleProps {
  onTitleHeightChange: (height: number, tipe: string) => void;
}

export default function Project({ onTitleHeightChange }: TitleProps) {
  const navigate = useNavigate();

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
        <div className="flex my-10 flex-wrap justify-center">
          {images.map((image, index) => (
            <button className="cursor-pointer" onClick={() => navigate('/portofolio_r/project', { state: { image } })}>
              <div
                key={index}
                className="group relative w-80 h-64  max-w-sm my-5 mx-5  shadow-lg rounded-lg overflow-hidden hover:bg-neutral-800 hover:opacity-100 transition ease-in-out"
              >
                <div className="absolute bg-neutral-800 bottom-0 right-0 inset-8  rounded-lg  "></div>
                <div className=" absolute top-4 left-3 ">
                  <img
                    className="w-72 h-44 object-fill rounded-lg  "
                    src={image.img1}
                    alt="Card Image"
                  />
                  <div className=" text-center">
                    <h1 className=" text-neutral-200 text-lg pt-2 font-nomal font-oswald  tracking-wider">
                      {image.title_img}
                    </h1>
                    <p className=" text-neutral-400 text-sm">
                      {image.language}
                    </p>
                  </div>
                </div>
                <div className="absolute top-5 right-7  inset-0 flex items-start justify-end ">
                  <button className=" group-hover:block bg-neutral-700 text-white font-bold py-1 px-1 rounded transition-opacity duration-500 opacity-0 group-hover:opacity-100 ">
                    <img className="w-7" src={expand} />
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
