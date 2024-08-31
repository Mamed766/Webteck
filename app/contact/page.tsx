import React from "react";
import Background from "../_components/Background/Background";
import ContactDetail from "../_components/ContactDetail/ContactDetail";

const Contact = () => {
  return (
    <div>
      <div className="pt-20">
        <Background
          title="Contact us"
          linkHref="/home"
          linkText="Home"
          currentText="Contact us"
        />
      </div>
      <div className="bg-[#F0F4FF]">
        <ContactDetail />
      </div>
    </div>
  );
};

export default Contact;
