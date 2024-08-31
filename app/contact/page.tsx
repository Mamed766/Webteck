import React from "react";
import Background from "../_components/Background/Background";
import ContactDetail from "../_components/ContactDetail/ContactDetail";
import ContactForm from "../_components/ContactForm/ContactForm";
import Map from "../_components/Map/Map";

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
      <div
        className="bg-white"
        style={{
          backgroundImage:
            "url('https://wordpress.themeholy.com/webteck/wp-content/uploads/2024/02/contact_bg_1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContactForm />
      </div>
      <div className="w-full">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
