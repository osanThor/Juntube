import React from "react";
import styled from "styled-components";
import VideoItem from "./videoItem/videoItem";

const VideoListBlock = styled.ul`
  &.grid_form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-column-gap: 1rem;
  }
  &.flex_form {
    width: 20%;
    max-width: 350px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      width: 100%;
      max-width: none;

      li {
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        flex-direction: row;

        .thumbnail {
          width: 30%;
          height: auto;
        }
        .description {
          h1 {
            font-size: 0.8rem;
            display: -webkit-box;
          }
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;
const VideoList = ({ videos, onSelectVideo, display }) => {
  const displayType = display === "grid" ? "grid_form" : "flex_form";
  return (
    <VideoListBlock className={displayType}>
      {videos.map((v) => (
        <VideoItem key={v.id} video={v} onSelectVideo={onSelectVideo} />
      ))}
    </VideoListBlock>
  );
};

export default VideoList;
