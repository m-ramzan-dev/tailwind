import React from "react";
import ImageComputer from "../images/image-computer.png";

const QuickSection = () => {
  return (
    <section className="section-container">
      <div className=" relative flex flex-col space-y-6 my-16 md:flex-row md:space-y-0">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={ImageComputer}
            alt=""
            className="md:absolute  top-0 right-[50%]"
          />
        </div>
        {/* Text Content Container */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:ml-8 text-left">
          {/* Item One */}
          <div className="flex flex-col space-y-4 mx-auto">
            <h5> Quick Search</h5>
            <p className="text-2xl text-grayishBlue max-w-md">
              Easily search your snippets by content, category, web address,
              application and more.
            </p>
          </div>
          {/* Item Two */}
          <div className="flex flex-col space-y-4 mx-auto">
            <h5>iCloud Sync</h5>
            <p className="text-2xl text-grayishBlue max-w-md">
              Instantly saved and syncs snippets across all your devices.
            </p>
          </div>
          {/* Item Three */}
          <div className="flex flex-col space-y-4 mx-auto">
            <h5>Completely History</h5>
            <p className="text-2xl text-grayishBlue max-w-md">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSection;
