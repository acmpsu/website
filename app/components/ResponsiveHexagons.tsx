'use client'

import { useEffect, useState } from 'react';
import HexagonTileTextReveal from './HexagonTileTextReveal';

export default function ResponsiveHexagon() {
  const [shouldShow, setShouldShow] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      setShouldShow(window.innerWidth > 1140);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't show anything until client is mounted to avoid hydration mismatch
  if (!isMounted) return <div className="hidden md:flex justify-end items-center w-full"></div>;
  
  if (!shouldShow) return <div className="hidden" />;

  return (
    <div className="flex justify-end items-center w-full">
      <HexagonTileTextReveal />
    </div>
  );
}