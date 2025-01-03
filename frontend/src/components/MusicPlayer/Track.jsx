import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => {
  const songName = activeSong?.title || activeSong?.attributes?.name;
  const artistName = activeSong?.subtitle || activeSong?.attributes?.artistName;
  const artCover = activeSong?.images?.coverart || activeSong?.attributes?.artwork?.url;

  return (
    <div className="flex-1 flex items-center justify-start">
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img src={artCover} alt="cover art" className="rounded-full" />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {songName ? songName : 'No active Song'}
        </p>
        <p className="truncate text-gray-300">
          {artistName ? artistName : 'No active Song'}
        </p>
      </div>
    </div>
  );
};

export default Track;
