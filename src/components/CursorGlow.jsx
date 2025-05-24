import React, { useState, useEffect, useRef } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const animationFrameId = useRef(null);
  const lastMousePosition = useRef({ x: -100, y: -100 });
  const movementTimeoutId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isMoving) {
        setIsMoving(true); // Show glow immediately on first move
      }

      // Clear previous timeout for hiding the glow
      if (movementTimeoutId.current) {
        clearTimeout(movementTimeoutId.current);
      }
      // Set a new timeout to hide the glow if mouse stops
      movementTimeoutId.current = setTimeout(() => setIsMoving(false), 150); // Reduced timeout slightly

      // Cancel any pending animation frame to avoid multiple updates
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      // Schedule an update for the next animation frame
      animationFrameId.current = requestAnimationFrame(() => {
        setPosition(lastMousePosition.current);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (movementTimeoutId.current) {
        clearTimeout(movementTimeoutId.current);
      }
    };
  }, [isMoving]); // Added isMoving to dependencies to manage visibility on first move

  const glowSize = 500; // Slightly reduced size for performance
  const glowColor = 'rgba(100, 180, 255, 0.08)'; // Slightly more transparent for a subtler effect

  return (
    <div
      style={{
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${glowSize}px`,
        height: `${glowSize}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 65%)`, // Adjusted gradient stop
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 999,  // << CHANGED: Positive zIndex to bring it on top
        opacity: isMoving ? 0.6 : 0, // Adjusted opacity for when it's on top
        // Using a shorter, dedicated transition for opacity, letting transform handle smoothness
        transition: `opacity 0.2s ease-out`,
        // No transition on top/left, position is set directly by rAF
        willChange: 'opacity', // Only opacity is being transitioned now
      }}
    />
  );
};

export default CursorGlow; 