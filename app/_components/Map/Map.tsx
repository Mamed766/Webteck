import React from "react";

const Map: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095574!2d144.9537363153197!3d-37.81627997975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776f2c0a12de0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635779504779!5m2!1sen!2sau"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
