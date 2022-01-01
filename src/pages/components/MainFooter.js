import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

// CSS
import "./components.css";

const MainFooter = () => {
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
        <div className="main-footer">
          <StaticImage
            src="../../images/logo.png"
            width={200}
            alt="logo"
            quality={100}
          />
          <p>
            29 Estmil Road, Elfindale, Diep River, 7945 <br />
            Phone: (021) 712 6147 <br />
            Cell: (079) 316 4345 <br />
            Email: info@coreinteriors.co.za <br />
            Web: www.coreinteriors.co.za
          </p>
        </div>
        {/* <div className="rhys">
        <p>Site by Rhys Studios</p>
      </div> */}
      </main>
    );
  } else {
    return (
      <main>
        <div className="main-footer-mobile">
          <StaticImage
            src="../../images/logo.png"
            width={200}
            alt="logo"
            quality={100}
          />
          <br />
          <p>
            29 Estmil Road, Elfindale, Diep River, 7945 <br />
            Phone: (021) 712 6147 <br />
            Cell: (079) 316 4345 <br />
            Email: info@coreinteriors.co.za <br />
            Web: www.coreinteriors.co.za
          </p>
        </div>
        {/* <div className="rhys">
            <p>Site by Rhys Studios</p>
          </div> */}
      </main>
    );
  }
};

export default MainFooter;
