"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function YouTubeFacade({ videoId, title, className = "" }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // YouTube thumbnail URL (maxresdefault or hqdefault)
  const thumbnailUrl = imgError
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={`absolute inset-0 w-full h-full ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      className={`absolute inset-0 w-full h-full group cursor-pointer bg-black ${className}`}
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
        quality={75}
        onError={() => setImgError(true)}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 group-hover:scale-110 transition-all shadow-lg">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
        </div>
      </div>

      {/* "Click to play" text */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-white text-sm bg-black/50 px-3 py-1 rounded">
          Click to play video
        </span>
      </div>
    </button>
  );
}
