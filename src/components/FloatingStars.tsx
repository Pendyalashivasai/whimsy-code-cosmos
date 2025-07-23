import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface StarProps {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export const FloatingStars = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: StarProps[] = [];
      for (let i = 0; i < 15; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 16 + 8,
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-float"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <Star 
            size={star.size} 
            className="text-magic-star opacity-30 animate-sparkle"
            fill="currentColor"
            style={{ animationDelay: `${star.delay + 1}s` }}
          />
        </div>
      ))}
    </div>
  );
};