import React from "react";
import styled from "styled-components";

const VideoDetailBlock = styled.div`
  width: 80%;
  padding: 1rem;
  h2 {
    color: white;
    font-size: 1.75rem;
    margin: 1rem 0;
  }
  h3 {
    color: white;
    font-size: 1.25rem;
    margin: 1rem 0;
  }
  pre {
    white-space: pre-wrap;
    margin: 1rem 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
    h2 {
      font-size: 1.25rem;
    }
    h3 {
      font-size: 1rem;
    }
    pre {
      font-size: 0.75rem;
    }
  }
`;
const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <VideoDetailBlock>
      <iframe
        title="Youtube Video Player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre>{snippet.description}</pre>
    </VideoDetailBlock>
  );
};

export default VideoDetail;
