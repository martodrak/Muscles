// src/VideoPlayer.jsx
import React from "react";

const VideoPlayer = ({ videoLink }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[60vw] w-[80vw] bg-gray-100 p-4 rounded-xl">
      {/* <h1 className="text-3xl font-bold mb-4">Video ukázka</h1> */}
      <div className="w-full max-w-5xl aspect-video">
        <iframe
          className="w-full h-full rounded shadow-lg"
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
