import React from "react";
import LogoGoogle from "../images/logo-google.png";
import LogoIbm from "../images/logo-ibm.png";
import LogoHp from "../images/logo-hp.png";
import LogoMicrosoft from "../images/logo-microsoft.png";

const ReferenceSection = () => {
  return (
    <div className="flex flex-col  items-center justify-between space-y-16 max-w-6xl mx-auto my-44 md:flex-row md:space-y-0 ">
      <img src={LogoGoogle} alt="" />
      <img src={LogoHp} alt="" />
      <img src={LogoIbm} alt="" />
      <img src={LogoMicrosoft} alt="" />
    </div>
  );
};

export default ReferenceSection;
