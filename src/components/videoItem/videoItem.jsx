import React from "react";
import styled from "styled-components";

const VideoItemBlock = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  background-color: #171717;
  cursor: pointer;

  .thumbnail {
    width: 100%;
    height: 70%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.1s ease-in;
    }
  }

  .description {
    width: 100%;
    height: 30%;
    padding: 0.5rem;
    h1 {
      font-size: 0.8rem;
      display: -webkit-box;
    }
    p {
      font-size: 0.8rem;
    }
  }

  &:hover {
    background-color: #383838;
    .thumbnail {
      img {
        transform: scale(1.05);
      }
    }
  }

  & {
    margin-bottom: 1rem;
  }
`;
const VideoItem = ({ video, video: { snippet }, onSelectVideo }) => {
  return (
    <VideoItemBlock onClick={() => onSelectVideo(video)}>
      <div className="thumbnail">
        <img src={snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className="description">
        <h1>{snippet.title}</h1>
        <p>{snippet.channelTitle}</p>
      </div>
    </VideoItemBlock>
  );
};

export default VideoItem;
