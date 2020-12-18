import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <div className='ui container'>
        <SearchBar onSubmit={onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <VideoDetail video={selectedVideo} />
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
