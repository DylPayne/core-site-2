import * as React from "react";

// Components
import MainHeader from "./components/MainHeader";
import HomeBody from "./components/HomeBody";
import MainFooter from "./components/MainFooter";

// markup
const IndexPage = () => {
  return (
    <main>
      <MainHeader />
      <HomeBody />
      <MainFooter />
    </main>
  );
};

export default IndexPage;
