import React from "react";
import BlackList from "../images/icon-blacklist.svg";
import IconText from "../images/icon-text.svg";
import IconReview from "../images/icon-preview.svg";

const SuperChargeSection = () => {
  return (
    <div className="section-container my-16">
      <h3>Supercharge you workflow</h3>
      <p className="text-2xl text-grayishBlue mt-8">
        We have got the tool to boost your productivity.
      </p>
      {/* List Items Container */}
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12 my-10">
        {/* Item One */}
        <div className="flex flex-col justify-center items-center space-y-6 max-w-2xl mx-auto">
          <img src={BlackList} alt="" />
          <h5>Create BlckList</h5>
          <p className="text-xl text-grayishBlue">
            Easily Search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        {/* Item Two */}
        <div className="flex flex-col justify-center items-center space-y-6 max-w-2xl mx-auto">
          <img src={IconText} alt="" />
          <h5>Plain text snippets</h5>
          <p className="text-xl text-grayishBlue">
            Quick preview of all your snippets on your Clipboard for easy
            access.
          </p>
        </div>
        {/* Item Three */}
        <div className="flex flex-col justify-center items-center space-y-6 max-w-2xl mx-auto">
          <img src={IconReview} alt="" />
          <h5>Create BlckList</h5>
          <p className="text-xl text-grayishBlue">
            Easily Search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperChargeSection;
