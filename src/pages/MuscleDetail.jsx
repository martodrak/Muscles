import React from "react";
import VideoPlayer from "../components/VideoPlayer";

export default function MuscleDetail({ data }) {
  const { name, description, image, latin } = data;
  return (
    <div className="flex flex-col items-center justify-center px-32 mt-16">
      <div className="flex items-center justify-center gap-16">
        <img className="w-[310px] h-[520px]" src={image} />
        <div className="relative border-2 rounded-xl px-6 py-6 max-w-[400px] flex flex-col items-center justify-center">
          <p className="absolute top-2 right-4 text-gray-400">"{latin}"</p>
          <p className="font-bold text-3xl mt-2">{name}</p>
          <div className="border-2 w-[350px] mt-2" />
          <p className="mt-6">{description}</p>
        </div>
      </div>
      <div className="flex flex-col mt-32 items-center justify-center">
        <p className="text-6xl text- mb-8 mr-[55vw]">Video ukázka</p>
        <VideoPlayer />
      </div>
    </div>
  );
}
