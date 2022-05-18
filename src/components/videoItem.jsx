import React from "react";
import styled from "styled-components";

const VideoItemBlock = styled.li`
  width: 100%;
  padding: 1rem 20px;
  border: 1px solid blue;
`;
const VideoItem = ({ video }) => {
  console.log(video);
  return <VideoItemBlock>{video.snippet.title}</VideoItemBlock>;
};

export default VideoItem;
