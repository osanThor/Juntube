import MainContainer from "./container/mainContainer";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/common/header/header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const inputRef = useRef();

  const handleReset = () => {
    setSelectedVideo(null);
    youtube.mostPopular().then((videos) => setVideos(videos));
    inputRef.current.vlaue = "";
  };
  const handelSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  const handelSearch = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube.search(query).then((video) => {
        setVideos(video);
      });
    },
    [youtube]
  );

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Header
        onSearch={handelSearch}
        handleReset={handleReset}
        inputRef={inputRef}
      />
      <MainContainer
        videos={videos}
        onSelectVideo={handelSelectVideo}
        selectedVideo={selectedVideo}
      />
    </>
  );
}

export default App;
