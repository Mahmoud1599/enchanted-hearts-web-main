import React, { useState, useEffect } from "react";

const AnimatedImageGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "src/imgs/photo_2026-04-06_22-36-26.jpg",
      caption: "You are so kind and sincere",
      delay: 0,
    },
    {
      src: "src/imgs/photo_2026-04-06_22-36-48.jpg",
      caption: "I never notice the time when I'm with you",
      delay: 0.2,
    },
    {
      src: "src/imgs/photo_2026-04-06_22-35-44.jpg",
      caption: "You are graduating 😁",
      delay: 0.4,
    },
    {
      src: "src/imgs/photo_2026-04-06_22-36-19.jpg",
      caption: "listening to you is my favourite thing",
      delay: 0.6,
    },
    {
      src: "src/imgs/21d635958670dfea0f990f7a14490f3e.jpg",
      caption: "you always forget to charge your phone 😂",
      delay: 0.8,
    },
    {
      src: "src/imgs/photo_2026-04-06_22-37-00.jpg",
      caption: "Meeting you is like medetation, it calms my soul",
      delay: 1.0,
    },
  ];

  const decorativeElements = [
    { emoji: "🌸", top: "10%", left: "5%", delay: 0 },
    { emoji: "💕", top: "15%", left: "85%", delay: 0.5 },
    { emoji: "🦋", top: "25%", left: "15%", delay: 1 },
    { emoji: "✨", top: "35%", left: "90%", delay: 1.5 },
    { emoji: "🌺", top: "45%", left: "8%", delay: 2 },
    { emoji: "💖", top: "55%", left: "92%", delay: 2.5 },
    { emoji: "🌹", top: "65%", left: "12%", delay: 3 },
    { emoji: "🎀", top: "75%", left: "88%", delay: 3.5 },
    { emoji: "🍓", top: "85%", left: "10%", delay: 4 },
    { emoji: "🌟", top: "95%", left: "85%", delay: 4.5 },
  ];

  return (
    <div className="animated-image-grid-container">
      <div className="grid-background-decoration">
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className="floating-decoration"
            style={{
              top: element.top,
              left: element.left,
              animationDelay: `${element.delay}s`,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="grid-header">
        <h2 className="grid-title">
          <span className="title-line">Some facts</span>
          <span className="title-line">about you 👌</span>
        </h2>
      </div>

      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`grid-item ${hoveredIndex === index ? "hovered" : ""}`}
            style={{ animationDelay: `${image.delay}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <img src={image.src} alt={image.caption} className="grid-image" />
              <div className="image-overlay">
                <div className="image-hearts">
                  <span className="heart-1">💕</span>
                  <span className="heart-2">💖</span>
                  <span className="heart-3">💕</span>
                </div>
                <p className="image-caption">{image.caption}</p>
              </div>
            </div>
            <div className="item-border"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedImageGrid;
