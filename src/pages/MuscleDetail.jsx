import React from "react";
import VideoPlayer from "../components/VideoPlayer";

export default function MuscleDetail({ data }) {
  const { name, description, image, latin, videoLink } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center py-16 px-4">
      {/* Muscle Info Card */}
      <div className="relative bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-3xl px-8 py-10 max-w-xl w-full flex flex-col items-center justify-center shadow-xl mb-12">
        <p className="absolute top-4 right-8 text-green-400 text-base italic font-sans">
          "{latin}"
        </p>
        <h1 className="font-bold text-3xl md:text-5xl mt-2 text-green-700 text-center font-sans mb-2">
          {name}
        </h1>
        <div className="w-24 h-1 bg-green-200 mx-auto rounded mb-4"></div>
        <p className="mt-4 text-center text-lg text-green-900 font-sans leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-16">
        <img
          className="w-full max-w-xs md:w-[310px] md:h-[520px] rounded-2xl border-2 border-green-100 shadow-lg"
          src={image}
          alt={name}
        />
      </div>

      {/* Video Section */}
      <div className="flex flex-col mt-8 md:mt-16 items-center justify-center w-full ">
        <h2 className="text-3xl md:text-5xl mb-4 md:mb-8 self-start md:ml-0 ml-4 font-bold text-green-700 font-sans">
          Video ukázka
        </h2>
        <div className="w-full flex justify-center">
          <VideoPlayer videoLink={videoLink} />
        </div>
      </div>
    </div>
  );
}
