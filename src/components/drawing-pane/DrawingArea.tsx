import React, { useEffect } from 'react';
import { setupPaper } from '../../lib/paper/paper';

function DrawingArea() {
  useEffect(() => {
    setupPaper();
  });

  return (
    <div>
      <canvas
        style={{ border: '1px solid black', backgroundColor: 'white', width: '2000px', height: '1000px' }}
        id="myCanvas"
      ></canvas>
    </div>
  );
}

export default DrawingArea;
