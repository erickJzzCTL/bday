import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { FaPlay } from 'react-icons/fa6';
import { FaPause } from 'react-icons/fa6';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.querySelector('audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio loop>
        <source src="/bdaymusic.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h1 className="heading">HAPPY BIRTHDAY ANGEL</h1>
      <p className="wish-message ">
        Wishing you a day filled with love, laughter, and all the things that
        make you happiest. May this year bring you endless joy and success.
        Happy Birthday!
      </p>
      <div className="list ">
        <div
          className="item hidden-res"
          style={{ width: '200px', height: '200px' }}
        >
          <img
            src="/img1.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          className="item hidden-res"
          style={{ width: '200px', height: '200px' }}
        >
          <img
            src="/img2.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="item " style={{ width: '200px', height: '200px' }}>
          <img
            src="/img3.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="item " style={{ width: '200px', height: '200px' }}>
          <img
            src="/img4.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          className="item hidden-res"
          style={{ width: '200px', height: '200px' }}
        >
          <img
            src="/img5.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          className="item hidden-res"
          style={{ width: '200px', height: '200px' }}
        >
          <img
            src="/img6.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          className="item hidden-res"
          style={{ width: '200px', height: '200px' }}
        >
          <img
            src="/img7.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          className="item hidden-res"
          style={{ width: '200px', height: '200px' }}
        >
          <img
            src="/img8.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* <div className="item " style={{ width: '200px', height: '200px' }}>
          <img
            src="/img9.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="item " style={{ width: '200px', height: '200px' }}>
          <img
            src="/img10.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div> */}
        {/* <div className="item " style={{ width: '200px', height: '200px' }}>
          <img
            src="/img11.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div> */}
        {/* <div className="item " style={{ width: '200px', height: '200px' }}>
          <img
            src="/img12.jpeg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={toggleMusic}
          className="music-button"
          style={{ color: 'white', fontSize: '24px' }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <h1 style={{ color: '#eabad7', fontSize: '24px' }}>Play / Pause</h1>
    </>
  );
}

export default App;
