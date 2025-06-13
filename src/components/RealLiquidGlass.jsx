import { useEffect } from 'react';

function RealLiquidGlass() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = '/liquid-glass.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: remove effect and script on unmount
    return () => {
      if (window.liquidGlass && typeof window.liquidGlass.destroy === 'function') {
        window.liquidGlass.destroy();
      }
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default RealLiquidGlass; 