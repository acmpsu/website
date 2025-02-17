'use client'

import { useEffect, useState } from 'react';
import HexagonTileTextReveal from './HexagonTileTextReveal';

export default function ResponsiveHexagon() {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
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

  if (!shouldShow) return null;

  return (
    <div className="flex justify-end items-center w-full">
      <HexagonTileTextReveal />
    </div>
  );
}