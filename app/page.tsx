'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import videoData, { Video } from './videoData';

export default function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentVideo: Video = videoData[currentVideoIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = currentVideo.src;
      if (playing) {
        videoRef.current.play();
      }
    }
  }, [currentVideoIndex, currentVideo.src]); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setProgress(videoRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [playing]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };  

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoData.length);
    setPlaying(true);
  };
  
  const playPreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoData.length) % videoData.length);
    setPlaying(true);
  };

  const handleSelectVideo = (index: number) => {
    setCurrentVideoIndex(index);
    setPlaying(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="container-custom">
      <aside className="sidebar-custom">
      <h2 className="text-2xl font-bold mb-3 text-white text-center">Playlist de Vídeos</h2>
        <ul>
          {videoData.map((video, index) => (
            <li
              key={index}
              onClick={() => handleSelectVideo(index)}
              className={`list-item-custom ${currentVideoIndex === index ? 'bg-gray-700' : 'bg-transparent'}`}
            >
              <img src={video.thumbnail} alt="Thumbnail" className="video-thumbnail" />
              <strong>{video.title}</strong> - {video.duration}
            </li>
          ))}
        </ul>
      </aside>

      <div className="content-custom">
        <video ref={videoRef} onEnded={playNextVideo} className="video-player">
          <source src={currentVideo.src} type="video/mp4" />
        </video>

        <div className="video-title">{currentVideo.title}</div>
        <div className="video-description">{currentVideo.description}</div>

        <div className="progress-container">
          <input
            type="range"
            className="progress-bar"
            min="0"
            max={videoRef.current?.duration || 0}
            value={progress}
            onChange={(e) => {
              if (videoRef.current) {
                videoRef.current.currentTime = parseFloat(e.target.value);
                setProgress(parseFloat(e.target.value));
              }
            }}
          />
          <span className="progress-time">
            {formatTime(progress)} / {formatTime(videoRef.current?.duration || 0)}
          </span>
        </div>

        <div className="controls-container">
          <FaBackward size={24} color="#B2B2B2" onClick={playPreviousVideo} />
          <div onClick={togglePlay} className="play-button">
            {playing ? <FaPause size={30} color="#fff" /> : <FaPlay size={30} color="#fff" />}
          </div>
          <FaForward size={24} color="#B2B2B2" onClick={playNextVideo} />
        </div>

        <div className="volume-container flex items-center mt-4">
          {volume === 0 ? (
            <FaVolumeMute size={24} color="#B2B2B2" />
          ) : (
            <FaVolumeUp size={24} color="#B2B2B2" />
          )}
          <div className="volume-bar-container relative flex items-center ml-4">
            <input
              type="range"
              className="volume-bar"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
