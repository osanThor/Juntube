import React from "react";
import styled from "styled-components";
import VideoItem from "./videoItem/videoItem";

const VideoListBlock = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const VideoList = ({ videos }) => {
  console.log(videos);
  return (
    <VideoListBlock>
      {videos.map((v) => (
        <VideoItem key={v.id} video={v} />
      ))}
    </VideoListBlock>
  );
};

export default VideoList;
