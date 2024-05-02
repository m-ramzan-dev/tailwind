import React from "react";
import ImageDevices from "../images/image-devices.png";

const AccessSection = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col space-y-6 mt-48 max-w-4xl mx-auto mb-16">
        <h3>Access Clipboard Anywhere</h3>
        <p className="text-darkGrayishBlue text-2xl">
          Whether you're on the go, or at your computer, you can access all your
          Clipboard snippets in a few clicks
        </p>
        <img src={ImageDevices} alt="" />
      </div>
    </div>
  );
};

export default AccessSection;
