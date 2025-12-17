import React from 'react';
import ColorBends from './background/ColorBends';

export default function Background() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      backgroundColor: '#000000ff'
    }}>
      <ColorBends
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
        rotation={120}
        speed={0.3}
        scale={1}
        frequency={1.4}
        warpStrength={1}
        mouseInfluence={0.2}
        parallax={1}
        noise={0.08}
        transparent={false}
      />
    </div>
  );
}
