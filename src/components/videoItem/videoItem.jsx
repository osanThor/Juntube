import React from "react";
import styled from "styled-components";

const VideoItemBlock = styled.li`
  display: flex;
  align-items: center;
  width: 50%;
  border: 1px solid lightgray;
  cursor: pointer;

  .thumbnail {
    width: 40%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.1s ease-in;
    }
  }

  .description {
    width: 60%;
    padding: 1rem;

    h1 {
      font-size: 0.8rem;
      display: -webkit-box;
    }
    p {
      font-size: 0.6rem;
    }
  }

  &:hover {
    .thumbnail {
      img {
        transform: scale(1.05);
      }
    }
  }
`;
const VideoItem = ({ video: { snippet } }) => {
  return (
    <VideoItemBlock>
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
