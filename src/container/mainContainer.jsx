import React from "react";
import Template from "../components/common/template";
import VideoDetail from "../components/videoDetail";
import VideoList from "../components/videoList";

const MainContainer = ({ videos, onSelectVideo, selectedVideo }) => {
  return (
    <Template>
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <VideoList
        videos={videos}
        onSelectVideo={onSelectVideo}
        display={selectedVideo ? "flex" : "grid"}
      />
    </Template>
  );
};

export default MainContainer;
