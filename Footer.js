import React from "react";

export default function Footer() {
  return (
    <div
      className="container footer mt-3 mb-3 text-start"
      style={{ backgroundColor: "pink" }}
    >
      <h1>Our Location</h1>
      <div className="row">
        <div className="col-4">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.265936900495!2d73.88949387101917!3d18.471609432264017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb1025acaf39%3A0xeac4ba5e15e2507d!2sOne%20Smile!5e0!3m2!1sen!2sin!4v1703692051157!5m2!1sen!2sin"
            width="450"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-8 ">
          <div className="row">
            <p className="mapInfo ms-5 text-center ">
              <h2 className="title">One Smile Dental Clinic</h2>
            </p>
            <div className="col-3 text-start ms-5">
              <p>
                <h4>Our Address</h4>
                One Smile Shop no. 13, Opel Acom, NIBM Rd, opposite Kool Homes,
                Kondhwa, Pune, Maharashtra 411048
              </p>
            </div>
            <div className="col-4 text-start ms-4">
              <p>
                <h4>Opening hours</h4>
                Monday : 10.00 am to 7.00 pm Tuesday : 10.00 am to 7.00 pm
                Wednesday : 10.00 am to 7.00 pm Thursday : 10.00 am to 7.00pm
                Friday : Closed <br />
                Saturday : 10.00 am to 1.00 pm Sunday : 10.00 am to 1.00 pm
              </p>
            </div>
            <div className="col-3 text-start">
              <p>
                <h4>Contact Details</h4>
                Phone: +91 9892781987 Email: reception.tdb@gmail.com WhatsApp:
                +91 9892781987
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*CopyRight*/}
      <div className="container footer text-center text-bg-warning mt-3 p-3">
        {" "}
        &Copy: One Smile 2024
      </div>
    </div>
  );
}
