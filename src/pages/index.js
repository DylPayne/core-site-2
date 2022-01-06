import * as React from "react";

// Components
import MainHeader from "./components/MainHeader";
import HomeBody from "./components/HomeBody";
import MainFooter from "./components/MainFooter";
import Seo from "./components/seo";

// markup
const IndexPage = () => {
  return (
    <main>
      <Seo title="Core Interiors" />
      <MainHeader />
      <HomeBody />
      <MainFooter />
    </main>
  );
};

export default IndexPage;
