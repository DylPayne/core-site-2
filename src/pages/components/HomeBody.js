import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

// CSS
import "./components.css";

import { Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const HomeBody = () => {
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    if (!isBrowser) return false;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <main>
      <div id="home-banner">
        <Stack spacing={6} alignItems="center">
          <h3
            style={{ paddingLeft: 20, paddingRight: 20, textAlign: "center" }}
          >
            Professional and Elegant Design
          </h3>
          <div className="custom-button">
            <Link to="/contact" className="custom-button-link">
              GET A QUOTE
            </Link>
          </div>
        </Stack>
      </div>
      <div id="home-about">
        {width > 1000 ? (
          <Stack
            spacing={4}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <p id="home-about-text">
              Welcome to Core Quality Kitchen, Cabinets and Interiors. Our
              specialty fields are kitchen, bedroom and office design –
              manufacture and installation. Only materials of excellent quality
              and from reputable suppliers are used. We also offer a “one stop
              renovation service”meaning we will appoint and manage all other
              trades like plumbers, builders and electricians taking the hassle
              and stress out of your home or kitchen alteration.
            </p>
            <StaticImage
              src="../../images/livingroom1.jpg"
              height={400}
              alt="kitchen"
              quality={100}
            />
          </Stack>
        ) : (
          <Stack
            spacing={4}
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <p id="home-about-text-mobile">
              Welcome to Core Quality Kitchen, Cabinets and Interiors. Our
              specialty fields are kitchen, bedroom and office design –
              manufacture and installation. Only materials of excellent quality
              and from reputable suppliers are used. We also offer a “one stop
              renovation service”meaning we will appoint and manage all other
              trades like plumbers, builders and electricians taking the hassle
              and stress out of your home or kitchen alteration.
            </p>
            <StaticImage
              src="../../images/kitchen1.jpg"
              height={400}
              alt="kitchen"
              quality={100}
            />
          </Stack>
        )}
      </div>
      <div id="home-process">
        <h1>Our Process</h1>
        <br />
        <div className="home-process-text-container left">
          <div className="home-process-text left">
            <h2>Planning</h2>
            <br />
            <p>
              Be it a kitchen, bedroom, bathroom or home office unit, all our
              projects are customized for each clients needs, budget and
              lifestyle. We consider this to be an exciting and stimulating
              process that begins with planning… making decisions relating to
              workspace layouts, heights of units, ergonomics , the
              architectural style and details ,the colour palette, materials,
              work surfaces, appliance selection, lighting and much more. During
              the planning phase we will introduce you to the wide range of
              options and finishes available while doing a lot of listening
              relating to your needs and vision. The initial meeting can be done
              at the clients home or job site or in our studio, whatever suits
              best. Once we feel we have sufficient information we can take it
              to the next level – design.
            </p>
          </div>
        </div>
        <br />
        <div className="home-process-text-container right">
          <div className="home-process-text ">
            <h2>Design</h2>
            <br />
            <p>
              Using state of the art kitchen design and rendering software we
              will transform all the considerations and options discussed to
              design sketches and construction specifications for your project.
              These plans can be rendered as 3 dimensional drawings to help you
              visualise the proposed design. Together we will refine the details
              of the plan and finalize choices of materials and accessories and
              appliances that will be required for your kitchen, bedroom or
              bathroom. Once the design and contract has been finalized an
              appointment will be made to visit or revisit the site and take
              final measurements, should there be any changes the drawings will
              then be updated for production. Once we have our final design for
              your kitchen, bedroom or bathroom we will prepare plumbing and
              electrical drawings where applicable.
            </p>
          </div>
        </div>
        <br />
        <div className="home-process-text-container left">
          <div className="home-process-text left">
            <h2>Installation</h2>
            <br />
            <p>
              When the confirmed order goes into production a lead time of
              between 4 and 6 weeks from date of final measurements to time of
              delivery is to be expected. Should you require during this time
              period our contractors can take care of all wetworks, stripping
              the old kitchen, plumbing, electrical, tiling and any new walls
              that might be needed, you are of course welcome to contract
              builders etc. directly for any other works required. We have found
              that by using our own contractors and taking care of our own
              project management we are able to avoid almost all the usual
              disappointments that are so common in the industry. Installation
              for an average kitchen is usually 2 to 3 days. Following the
              installation of the units the Countertops will then be measured
              for production. Our stone suppliers will normally deliver within 3
              – 7days from measure, only then can the sinks and hobs be fitted
              and minor snags attended to. This brings us to the end of the
              project.
            </p>
          </div>
        </div>
      </div>
      <div id="home-testimonials">
        <div id="home-suppliers-title">
          <h1 id="home-suppliers-title-text">TESTIMONIALS</h1>
          <br />
          <p>
            “My wife and I have built many homes both overseas and locally and
            never before have we come across such an amazing couple, Shaun and
            Michelle! They were simply amazing not only in their ideas but
            support as well. Building a home so far away from South Africa is
            never an easy task but having Shaun and Michelle in our corner was a
            Godsend and we absolutely love the finished product. We are both
            very proud to be associated with Core Interiors and would recommend
            them without hesitation to anyone who asked.”
          </p>
          <br />
          <div className="custom-button">
            <Link to="/testimonials" className="custom-button-link">
              MORE TESTIMONIALS
            </Link>
          </div>
        </div>
      </div>
      <div id="home-suppliers">
        <div id="ksa">
          <StaticImage src="../../images/ksa.png" width={110} alt="ksa" />
        </div>
        <div id="home-suppliers-title">
          <h1>OUR SUPPLIERS</h1>
        </div>
        <div id="home-suppliers-images">
          <StaticImage
            src="../../images/caesarstone.png"
            height={50}
            alt="grass"
          />
          <StaticImage src="../../images/grass.png" height={50} alt="grass" />
          <StaticImage src="../../images/larson.png" height={50} alt="grass" />
          <StaticImage src="../../images/raiel.png" height={50} alt="grass" />
          <StaticImage src="../../images/smeg.png" height={50} alt="grass" />
          <StaticImage
            src="../../images/vicostone.png"
            height={50}
            alt="grass"
          />
        </div>
      </div>
    </main>
  );
};

export default HomeBody;
