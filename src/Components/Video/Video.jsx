import React, { useRef ,useState} from 'react';
import './Video.css';
import { FaPlay, FaStop } from 'react-icons/fa'; // Importing play and stop icons from react-icons
import updatevideo from '../../assests/updatesVideo.mp4'
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
    setShowControls(false); // Hide controls after playing
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setShowControls(true); // Show controls after stopping
  };

  return (
    <div className='main'>
    <div className="video-container" onMouseEnter={() => setShowControls(true)} onMouseLeave={() => !isPlaying && setShowControls(false)}>
      <div className="video-wrapper">
        <video ref={videoRef} className="video-element" width="100%" height="auto">
          <source src={updatevideo}type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Play/Stop Icons */}
        {showControls && (
          <div className="video-overlay">
            {isPlaying ? (
              <FaStop className="control-icon stop-icon" onClick={stopVideo} />
            ) : (
              <FaPlay className="control-icon play-icon" onClick={playVideo} />
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default VideoPlayer;
