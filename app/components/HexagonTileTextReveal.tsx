import { useEffect, useState } from 'react'

interface HexagonPatternProps {
  rows?: number
  cols?: number
  className?: string
  hexSize?: number
  gap?: number
}

export default function HexagonPattern({ 
  rows = 8,     
  cols = 11,    
  hexSize = 48,
  gap = 2,
  className = ""
}: HexagonPatternProps) {
  const [activeHexagons, setActiveHexagons] = useState<Set<string>>(new Set());
  const [hexagonColors, setHexagonColors] = useState<Record<string, string>>({});

  // Reduced color palette to light and dark blues
  const colors = ['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa'];

  useEffect(() => {
    // Get all possible positions
    const allPositions = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        allPositions.push(`${row}-${col}`);
      }
    }
    
    // Shuffle positions
    for (let i = allPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allPositions[i], allPositions[j]] = [allPositions[j], allPositions[i]];
    }

    // Take exactly 75% of positions
    const totalHexagons = rows * cols;
    const targetVisible = Math.floor(totalHexagons * 0.75);
    const visiblePositions = allPositions.slice(0, targetVisible);

    // Initialize with exactly 75% visible
    const initialActive = new Set<string>();
    const initialColors: Record<string, string> = {};
    
    visiblePositions.forEach(key => {
      initialActive.add(key);
      initialColors[key] = colors[Math.floor(Math.random() * colors.length)];
    });

    setActiveHexagons(initialActive);
    setHexagonColors(initialColors);

    // Hexagon animation interval
    const hexagonInterval = setInterval(() => {
      setActiveHexagons(prevActive => {
        const newActive = new Set(prevActive);
        const totalHexagons = rows * cols;
        const targetVisible = Math.floor(totalHexagons * 0.75);
        
        // Get all possible positions
        const allPositions = [];
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            allPositions.push(`${row}-${col}`);
          }
        }
        
        // Shuffle positions
        for (let i = allPositions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allPositions[i], allPositions[j]] = [allPositions[j], allPositions[i]];
        }
        
        // Take first few positions to update
        const positionsToUpdate = allPositions.slice(0, 5);
        
        for (const key of positionsToUpdate) {
          if (newActive.size > targetVisible) {
            newActive.delete(key);
          } else if (newActive.size < targetVisible) {
            newActive.add(key);
            setHexagonColors(prev => ({
              ...prev,
              [key]: colors[Math.floor(Math.random() * colors.length)]
            }));
          } else {
            if (Math.random() < 0.5) {
              if (newActive.has(key)) {
                newActive.delete(key);
              } else {
                newActive.add(key);
                setHexagonColors(prev => ({
                  ...prev,
                  [key]: colors[Math.floor(Math.random() * colors.length)]
                }));
              }
            }
          }
        }
        return newActive;
      });
    }, 2000); // Slower interval

    return () => clearInterval(hexagonInterval);
  }, []);

  const horizontalSpacing = hexSize + gap
  const verticalSpacing = hexSize * 0.866 + gap

  return (
    <div 
      className={`relative ${className}`}
      style={{
        width: cols * horizontalSpacing,
        height: rows * verticalSpacing,
        overflow: 'visible'
      }}
    >
      <div className="absolute top-0 left-0">
        {Array.from({ length: rows }).map((_, row) => (
          <div 
            key={row}
            className="flex"
            style={{
              marginLeft: row % 2 ? `${horizontalSpacing / 2}px` : '0',
              marginTop: row ? `-${gap}px` : '0'
            }}
          >
            {Array.from({ length: cols - (row % 2 ? 1 : 0) }).map((_, col) => (
              <div 
                key={`${row}-${col}`}
                style={{ 
                  width: hexSize,
                  height: hexSize,
                  marginRight: gap,
                  marginBottom: gap
                }}
              >
                <svg
                  viewBox="0 0 1562.98 1749.08"
                  className={`w-full h-full transition-all duration-2000
                    ${activeHexagons.has(`${row}-${col}`) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                  <path 
                    className="transition-colors duration-2000"
                    fill={hexagonColors[`${row}-${col}`] || colors[0]}
                    d="M1472.98,371.39L871.49,24.12c-55.69-32.15-124.31-32.15-180,0L90,371.39C34.31,403.54,0,462.96,0,527.27v694.54c0,64.31,34.31,123.73,90,155.88l601.49,347.27c55.69,32.15,124.31,32.15,180,0l601.49-347.27c55.69-32.15,90-91.58,90-155.88v-694.54c0-64.31-34.31-123.73-90-155.88Z"
                  />
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}