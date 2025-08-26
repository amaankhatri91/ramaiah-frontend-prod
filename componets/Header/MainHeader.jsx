import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

const MainHeader = () => {
  return (
    <div className="sticky top-0 z-50">
      <Header1 />
      <Header3 />
      <Header2 />
    </div>
  );
};

export default MainHeader;
