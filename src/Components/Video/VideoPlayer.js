import React, { useRef } from "react";

const VideoPlayer = () => {
  const video = useRef();

  const playAndPause = () => {
    video.current.paused ? video.current.play() : video.current.pause();
  };

  return (
    <video
      ref={video}
      onClick={playAndPause}
      src="http://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    />
  );
};

export default VideoPlayer;
