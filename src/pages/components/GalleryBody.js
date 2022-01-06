import React from "react";

// MUI
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { StaticImage } from "gatsby-plugin-image";

const GalleryBody = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#424242" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen1.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen2.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen3.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen4.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen5.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen6.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen7.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen8.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen9.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/kitchen10.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/bathroom1.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/bedroom1.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/study1.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/livingroom1.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
        <ImageListItem>
          <StaticImage
            src="../../images/tv-cabinet1.jpg"
            alt="kitchen"
            width={600}
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default GalleryBody;
