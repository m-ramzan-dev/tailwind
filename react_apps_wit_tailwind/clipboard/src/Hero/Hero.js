import React from "react";
import Logo from "../images/logo.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="section-container pt-16 mb-20">
        <img src={Logo} alt="" className="mx-auto my-16" />
        <h3 className="mb-8">A history of everything you copy</h3>
        <p className="text-2xl text-grayishBlue max-w-4xl mb-8 mx-auto">
          Clipboard allows you to track and organize everything you
          copy.Instantly access your clipboard on all your devices.
        </p>
        <div className="button-container">
          <a
            href="https://mhdramzan.com/"
            className="rounded-full shadow-lg py-4 px-8 bg-strongCyan hover:opacity-80 duration-200"
          >
            Download of IOS
          </a>
          <a
            href="https://mhdramzan.com/"
            className="rounded-full shadow-lg py-4 px-8 bg-lightBlue hover:opacity-80 duration-200"
          >
            Download of Mac
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
