import { useLocation } from "react-router-dom";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { image } = location.state || {}; // Retrieve the passed image data

  let currentImage;
  if (image.img1 && image.img2 && image.img3) {
    currentImage = [image.img1, image.img2, image.img3];
  } else if (image.img1 && image.img2) {
    currentImage = [image.img1, image.img2];
  } else {
    currentImage = [image.img1];
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImage.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImage.length - 1 : prevIndex - 1
    );
  };

  if (!image) {
    return <div>No image data provided.</div>;
  }

  return (
    <div className="container mx-auto bg-inherit">
      <div className="flex flex-wrap bg-white my-16 rounded-xl h-full py-8">
        <div className="w-1/2 flex items-center justify-center py-16 flex-col">
          <div className="w-2/3">
            <img
              src={currentImage[currentIndex]}
              alt={image.alt1}
              className="w-full h-full object-cover rounded-lg border-2 border-neutral-300"
            />
          </div>
          <div className="flex space-x-4 mt-5">
            {currentImage.length > 1 && (
              <div>
                <button
                  onClick={handlePreviousClick}
                  className="mx-5 px-4 py-2 bg-neutral-400 text-white rounded hover:bg-neutral-600"
                >
                  {"<"}
                </button>
                <button
                  onClick={handleNextClick}
                  className="mx-5 px-4 py-2 bg-neutral-400 text-white rounded hover:bg-neutral-600"
                >
                  {">"}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 pe-20 ">
          <h1 className="text-4xl font-bold py-8">{image.title_img}</h1>
          <hr className="border-neutral-800 w-2/3" />
          <h4 className="text-xl font-semibold py-2 pt-6 ">Summary</h4>
          <p className="text-md">{image.description}</p>
          <h4 className="text-xl font-semibold py-2 pt-6">Responsibilities</h4>
          <p className="text-md">{image.responsibilities}</p>
          <h4 className="text-xl font-semibold py-2 pt-6">Key Technologies </h4>
          <p className="text-md">{image.language}</p>
          <div className="flex justify-end pt-10 pe-2">
            <button onClick={() => navigate("/portofolio_r")}>
              <img src={arrow} className="w-12 opacity-55 hover:opacity-100"  />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
