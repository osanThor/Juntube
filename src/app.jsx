import "./app.css";
import MainContainer from "./container/mainContainer";
import React, { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("title");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAVPp5o7B2ImYJIlQeJ5Bbmegy_6F_GYxU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  console.log("아노대");
  // useEffect(() => {
  //   youtube.mostPopular().then((videos) => setVideos(videos));
  //   console.log(videos);
  // }, [youtube]);
  return <MainContainer videos={videos} />;
}

export default App;
