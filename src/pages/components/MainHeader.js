import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// CSS
import "./components.css";

// MUI
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

const MainHeader = () => {
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

  const [open, setOpen] = useState(false);

  return (
    <main>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <div className="mobile-link">
          <Link to="/" className="header-link">
            HOME
          </Link>
        </div>
        <div className="mobile-link">
          <Link to="/testimonials" className="header-link">
            TESTIMONIALS
          </Link>
        </div>
        <div className="mobile-link">
          <Link to="/services" className="header-link">
            SERVICES
          </Link>
        </div>
        <div className="mobile-link">
          <Link to="/gallery" className="header-link">
            GALLERY
          </Link>
        </div>
        <div className="mobile-link">
          <Link to="/about" className="header-link">
            ABOUT
          </Link>
        </div>
        <div className="mobile-link">
          <Link to="/contact" className="header-link">
            CONTACT US
          </Link>
        </div>
      </Drawer>
      {width > 1000 ? (
        <header className="main-header">
          <StaticImage
            src="../../images/logo.png"
            width={200}
            alt="logo"
            quality={100}
          />
          <Stack direction="row" spacing={4}>
            <Link to="/" className="header-link">
              HOME
            </Link>
            <Link to="/testimonials" className="header-link">
              TESTIMONIALS
            </Link>
            <Link to="/services" className="header-link">
              SERVICES
            </Link>
            <Link to="/gallery" className="header-link">
              GALLERY
            </Link>
            <Link to="/about" className="header-link">
              ABOUT
            </Link>
            <Link to="/contact" className="header-link">
              CONTACT US
            </Link>
          </Stack>
        </header>
      ) : (
        <header className="main-header-mobile">
          <div id="mobile-1">
            <Button onClick={() => setOpen(true)}>
              <MenuIcon style={{ color: "black" }} />
            </Button>
          </div>
          <div id="mobile-2">
            <StaticImage
              src="../../images/logo.png"
              width={250}
              alt="logo"
              quality={100}
            />
          </div>
          <div id="mobile-3"></div>
        </header>
      )}
    </main>
  );
};

export default MainHeader;
