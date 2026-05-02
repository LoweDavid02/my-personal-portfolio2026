import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateRingPosition = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    const animationFrame = setInterval(updateRingPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
      clearInterval(animationFrame);
    };
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        className="fixed w-1.5 h-1.5 bg-accent-cyan rounded-full pointer-events-none z-[10000] mix-blend-difference transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`fixed w-8 h-8 border-2 border-accent-cyan rounded-full pointer-events-none z-[10000] mix-blend-difference transition-all duration-300 ${
          isHovering ? 'scale-150 border-accent-violet' : ''
        }`}
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
    </>
  );
};

export default CustomCursor;
