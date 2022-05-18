import React from "react";
import Template from "../components/common/template";
import VideoList from "../components/videoList";

const MainContainer = ({ videos }) => {
  return (
    <Template>
      <VideoList videos={videos} />
    </Template>
  );
};

export default MainContainer;
