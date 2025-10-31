"use client";

import { useState, useRef } from "react";
import { getaudioTracksPage } from "@/componets/ServiceData/Audio";

const Audio = ({ slug }) => {
  const audioTrack = getaudioTracksPage(slug);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!audioTrack) return null;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <div className="min-[1200px]:pt-[47px] min-[800px]:pt-[35px] pt-[20px] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] pb-[20px] rounded-bl-[40px] rounded-br-[40px]">
      <div className="space-y-2 container">
        <div className="min-[1345px]:text-[48px] min-[800px]:text-[40px] text-[22px] font-bold text-[#3D3D3D]">
          <h2>Right care is given to the <span className="Text-color2">Right patient at the Right time</span></h2>
        </div>
        {/* AUDIO BAR */}
        <div className="flex items-center space-x-2 min-[1400px]:pt-[40px] min-[800px]:pt-[28px] pt-[18px]">
          <div className="flex-1 rounded-full min-[1200px]:h-[50px] h-[35px] Background-color relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between  px-1">
              {Array.from({ length: 50 }).map((_, i) => {
                const duration = 0.7 + (i % 5) * 0.1;
                const delay = (i % 10) * 0.05;
                const animationStyle =
                  isPlaying
                    ? {
                        animation: `wave ${duration}s ease-in-out infinite`,
                        animationDelay: `${delay}s`,
                        transformOrigin: "bottom",
                      }
                    : {};
                return (
                  <div
                    key={i}
                    className="w-0.5 h-full bg-white opacity-40"
                    style={animationStyle}
                  />
                );
              })}
            </div>
          </div>
          {/* PLAY BUTTON */}
          <button
            onClick={togglePlay}
            style={{ fontSize: "24px" }}
            className="ml-2 w-10 h-10 cursor-pointer rounded-full Background-color text-white flex items-center justify-center shadow-md hover:bg-purple-700 transition"
          >
            {isPlaying ? "❚❚" : "►"}
          </button>
        </div>
      </div>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioTrack.src} preload="auto" />
      {/* Wave animation keyframe */}
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: scaleY(0.3); }
            50% { transform: scaleY(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Audio;