import React from "react";
import Background from "../_components/Background/Background";
import BreadCrump from "../_components/BreadCrump/BreadCrump";
import ProjectsImage from "../_components/ProjectsImage/ProjectsImage";

const page = () => {
  return (
    <div>
      <div className="pt-[5rem]">
        <Background
          title="Projects"
          linkText="Home"
          linkHref="/home"
          currentText="Projects"
        />
      </div>
      <div>
        <ProjectsImage />
      </div>
    </div>
  );
};

export default page;
