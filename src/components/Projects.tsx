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
        <h1 className="text-5xl text-center font-bold">Projects</h1>
        <div className="flex my-10 flex-wrap justify-center">
          {images.map((image, index) => (
            <button key={index} className="cursor-pointer" onClick={() => navigate('/portofolio_r/project', { state: { image } })}>
              <div
                className="group relative w-80 h-64  max-w-sm my-5 mx-5  shadow-lg rounded-xl overflow-hidden hover:bg-neutral-800 duration-700 transition ease-in-out"
              >
                <div className="absolute bg-neutral-800 bottom-0 right-0 inset-8  rounded-xl  "></div>
                <div className=" absolute top-4 left-3 ">
                  <img
                    className="w-72 h-44 object-fill rounded-xl  "
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
                  <img src={expand} className="w-7 rounded-lg group-hover:block bg-neutral-700 text-white font-bold py-1 px-1  transition-opacity duration-500 opacity-0 group-hover:opacity-100 ">
                  </img>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
