import React, { useEffect, useState } from 'react';

const Bubble = () => {
  const [size, setSize] = useState(40);
  const [burst, setBurst] = useState(false);
  const [burstComplete, setBurstComplete] = useState(false);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    const handleScroll = () => {
      setSize((prevSize) => {
        const newSize = prevSize + 10;
        return newSize;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const burstTimer = setTimeout(() => {
      setBurst(true);

      setTimeout(() => {
        setBurstComplete(true);
      }, 2000);
    }, 1700);

    return () => clearTimeout(burstTimer);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%) scale(1.05)',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: burst ? 'transparent' : 'rgba(30, 144, 255, 0.4)',
        borderRadius: '50%',
        border: burst ? 'none' : '3px solid rgba(0, 191, 255, 0.6)',
        boxShadow: burst ? 'none' : '0 0 15px rgba(0, 191, 255, 0.6)',
        animation: burstComplete
          ? ''
          : 'float 7s ease-in-out infinite, pulse 4s ease-in-out infinite, drift 12s ease-in-out infinite, entry 1s ease-out forwards',
        opacity: burstComplete ? 0 : 1,
        overflow: 'hidden',
        zIndex: 1000,
      }}
    >
      {burst && !burstComplete && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${Math.random() * 8 + 5}px`,
                height: `${Math.random() * 8 + 5}px`,
                backgroundColor: getRandomColor(),
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%)`,
                animation: `burstParticle ${Math.random() * 2 + 2}s ease forwards`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>
      )}

      <style>
        {`
          @keyframes float {
            0% { transform: translate(-50%, -50%) scale(1.05); }
            50% { transform: translate(-50%, -50%) scale(1.15); }
            100% { transform: translate(-50%, -50%) scale(1.05); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          @keyframes drift {
            0% { transform: translate(-50%, -50%) translate(0px, 0px); }
            25% { transform: translate(-50%, -50%) translate(20px, -20px); }
            50% { transform: translate(-50%, -50%) translate(-20px, 20px); }
            75% { transform: translate(-50%, -50%) translate(15px, -15px); }
            100% { transform: translate(-50%, -50%) translate(0px, 0px); }
          }

          @keyframes burstParticle {
            0% { 
              transform: translate(-50%, -50%) scale(1); 
              opacity: 1; 
            }
            100% { 
              transform: translate(
                ${Math.random() * 200 - 100}px, 
                ${Math.random() * 200 - 100}px
              ) scale(0.7); 
              opacity: 0; 
            }
          }

          @keyframes entry {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

const getRandomColor = () => {
  const colors = ['#00BFFF', '#1E90FF', '#ADD8E6', '#87CEFA', '#B0E0E6'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Bubble;
