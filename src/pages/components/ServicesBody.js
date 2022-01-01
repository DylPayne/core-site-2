import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";

const ServicesBody = () => {
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
  if (width > 1000) {
    return (
      <main>
        <div id="services-banner">
          <h1>Services</h1>
        </div>
        <div id="kitchens" className="service">
          <div className="service-title">
            <h2>Kitchens</h2>
            <br />
          </div>
          <div className="service-image-text-container">
            <div className="service-body">
              <p>
                Core Cabinets & Interiors specialise in kitchen designs,
                renovations, kitchen manufacturing and kitchen installations.
                Our kitchens are constructed from the highest quality materials
                available in the country and abroad and we have a large
                selection of countertops, doors and finishes to choose from.
                <br />
                <br />
                Each kitchen is individually hand crafted with direct customer
                involvement throughout the design process to ensure
                satisfaction.
                <br />
                <br />
                Although Core Interiors specialise in clean Modern kitchen
                designs, we also offer a very broad range of finishes and
                concepts be it Classical, Country or Contemporary. Whatever your
                taste might be, our kitchen designer will undertake to make your
                vision of a dream kitchen a reality while working to a budget
                you can afford.
              </p>
            </div>
            <div className="service-image">
              <StaticImage
                src="../../images/kitchen4.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="bedrooms" className="service">
          <div className="service-title">
            <h2>Bedrooms</h2>
            <br />
          </div>
          <div className="service-image-text-container">
            <div className="service-body">
              <p>
                Core Cabinets & Interiors offer the latest in cupboard
                accessories and ergonomics for your bedroom. As with all other
                Core cabinets, the client can select any type of material and
                style to be used for their built-in cabinets.
                <br />
                <br />
                We specialize in bespoke solutions for unusual spaces maximising
                storage, form and function. Apart from conventional cupboard
                doors we offer an extensive range of sliding door solutions as
                well as all laminates, Veneers, Sprayed satin, High gloss
                finishes and solid timber.
              </p>
            </div>
            <div className="service-image">
              <StaticImage
                src="../../images/bedroom1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="bathrooms" className="service">
          <div className="service-title">
            <h2>Bathrooms</h2>
            <br />
          </div>
          <div className="service-image-text-container">
            <div className="service-body">
              <p>
                We offer design and layout services and will assist with your
                choice of fittings by accompanying you to our recommended
                suppliers. We specialize in the design, manufacture and
                installations of vanities and bathroom storage units.
              </p>
            </div>
            <div className="service-image">
              <StaticImage
                src="../../images/bathroom1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="study/office" className="service">
          <div className="service-title">
            <h2>Study & Offices</h2>
            <br />
          </div>
          <div className="service-image-text-container">
            <div className="service-body">
              <p>
                We can transform your home office or study with a variety of
                cabinet, storage and shelving options.
                <br />
                <br />
                In most families, the home office plays a wide variety of roles.
                If you work from home, it is your 9-to-5 place of business; for
                others, it’s a place to pay the bills, go through mail or store
                important documents.
                <br />
                <br />
                For kids, it’s a homework spot, or maybe the place to play hours
                and hours of computer games. It can be a library, a sitting room
                or just a quiet place for taking good naps.
                <br />
                <br />
                If you’re planning on renovating and redecorating your office we
                will help you make the most of this space whatever your needs,
                we can even custom build furniture and desks to suit your needs.
              </p>
            </div>
            <div className="service-image">
              <StaticImage
                src="../../images/study1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="tv-cabinets" className="service">
          <div className="service-title">
            <h2>TV Cabinets</h2>
            <br />
          </div>
          <div className="service-image-text-container">
            <div className="service-body">
              <p>
                Should you require a TV cabinet for your specific requirements
                and cannot find a solution to suit we can design and handcraft a
                bespoke solution that will exactly match your specifications. We
                have a large range of styles, materials and finishes to choose
                from.
              </p>
            </div>
            <div className="service-image">
              <StaticImage
                src="../../images/tv-cabinet1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div id="services-banner">
          <h1>Services</h1>
        </div>
        <div id="kitchens" className="service">
          <div className="service-title">
            <h2>Kitchens</h2>
            <br />
          </div>
          <div className="service-image-text-container-mobile">
            <div className="service-body-mobile">
              <p>
                Core Cabinets & Interiors specialise in kitchen designs,
                renovations, kitchen manufacturing and kitchen installations.
                Our kitchens are constructed from the highest quality materials
                available in the country and abroad and we have a large
                selection of countertops, doors and finishes to choose from.
                <br />
                <br />
                Each kitchen is individually hand crafted with direct customer
                involvement throughout the design process to ensure
                satisfaction.
                <br />
                <br />
                Although Core Interiors specialise in clean Modern kitchen
                designs, we also offer a very broad range of finishes and
                concepts be it Classical, Country or Contemporary. Whatever your
                taste might be, our kitchen designer will undertake to make your
                vision of a dream kitchen a reality while working to a budget
                you can afford.
              </p>
            </div>
            <br />
            <div className="service-image">
              <StaticImage
                src="../../images/kitchen4.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="bedrooms" className="service">
          <div className="service-title">
            <h2>Bedrooms</h2>
            <br />
          </div>
          <div className="service-image-text-container-mobile">
            <div className="service-body-mobile">
              <p>
                Core Cabinets & Interiors offer the latest in cupboard
                accessories and ergonomics for your bedroom. As with all other
                Core cabinets, the client can select any type of material and
                style to be used for their built-in cabinets.
                <br />
                <br />
                We specialize in bespoke solutions for unusual spaces maximising
                storage, form and function. Apart from conventional cupboard
                doors we offer an extensive range of sliding door solutions as
                well as all laminates, Veneers, Sprayed satin, High gloss
                finishes and solid timber.
              </p>
            </div>
            <br />
            <div className="service-image">
              <StaticImage
                src="../../images/bedroom1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="bathrooms" className="service">
          <div className="service-title">
            <h2>Bathrooms</h2>
            <br />
          </div>
          <div className="service-image-text-container-mobile">
            <div className="service-body-mobile">
              <p>
                We offer design and layout services and will assist with your
                choice of fittings by accompanying you to our recommended
                suppliers. We specialize in the design, manufacture and
                installations of vanities and bathroom storage units.
              </p>
            </div>
            <br />
            <div className="service-image">
              <StaticImage
                src="../../images/bathroom1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="study/office" className="service">
          <div className="service-title">
            <h2>Study & Offices</h2>
            <br />
          </div>
          <div className="service-image-text-container-mobile">
            <div className="service-body-mobile">
              <p>
                We can transform your home office or study with a variety of
                cabinet, storage and shelving options.
                <br />
                <br />
                In most families, the home office plays a wide variety of roles.
                If you work from home, it is your 9-to-5 place of business; for
                others, it’s a place to pay the bills, go through mail or store
                important documents.
                <br />
                <br />
                For kids, it’s a homework spot, or maybe the place to play hours
                and hours of computer games. It can be a library, a sitting room
                or just a quiet place for taking good naps.
                <br />
                <br />
                If you’re planning on renovating and redecorating your office we
                will help you make the most of this space whatever your needs,
                we can even custom build furniture and desks to suit your needs.
              </p>
            </div>
            <br />
            <div className="service-image">
              <StaticImage
                src="../../images/study1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
        <div id="tv-cabinets" className="service">
          <div className="service-title">
            <h2>TV Cabinets</h2>
            <br />
          </div>
          <div className="service-image-text-container-mobile">
            <div className="service-body-mobile">
              <p>
                Should you require a TV cabinet for your specific requirements
                and cannot find a solution to suit we can design and handcraft a
                bespoke solution that will exactly match your specifications. We
                have a large range of styles, materials and finishes to choose
                from.
              </p>
            </div>
            <br />
            <div className="service-image">
              <StaticImage
                src="../../images/tv-cabinet1.jpg"
                width={600}
                alt="kitchen"
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default ServicesBody;
