import React, { useState, useEffect } from 'react';

export default function FloatingHearts({ active }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (!active) {
      setHearts([]);
      return;
    }

    // Create a heart object
    const createHeart = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 1,
      size: 14 + Math.random() * 16,
      duration: 6 + Math.random() * 4,
      emoji: Math.random() > 0.3 ? '💗' : (Math.random() > 0.5 ? '💕' : '❤️'),
    });

    // Add hearts more frequently
    const interval = setInterval(() => {
      setHearts(prev => {
        // Keep more hearts on screen
        const newHearts = prev.length > 20 ? prev.slice(-20) : prev;
        return [...newHearts, createHeart()];
      });
    }, 800); // More frequent

    // Start with more initial hearts
    setHearts([
      createHeart(), createHeart(), createHeart(), 
      createHeart(), createHeart(), createHeart(),
    ]);

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            bottom: '-30px',
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </>
  );
}
