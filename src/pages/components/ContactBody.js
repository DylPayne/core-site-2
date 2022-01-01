import React from "react";

// CSS
import "./components.css";

const ContactBody = () => {
  return (
    <main>
      <div id="contact-banner">
        <h1>Contact Us</h1>
      </div>
      <div id="contact-contents">
        <table id="contact-table">
        <tr>
            <td className="contact-type">Address:</td>
            <td className="contact-detail">29 Estmil Road, Elfindale, Diep River, 7945</td>
          </tr>
          <tr>
            <td className="contact-type">Cell:</td>
            <td className="contact-detail">(079) 427 3172</td>
          </tr>
          <tr>
            <td className="contact-type">Telephone:</td>
            <td className="contact-detail">(021) 712 6147</td>
          </tr>
          <tr>
            <td className="contact-type">Email:</td>
            <td className="contact-detail">info@coreinteriors.co.za</td>
          </tr>
        </table>
      </div>
    </main>
  );
};

export default ContactBody;
