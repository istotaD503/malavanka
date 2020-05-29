import React, { useEffect } from 'react';
import { PaperScope } from 'paper';

function Paper() {
  useEffect(() => {
    setupPaper();
  });

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Paper Component</h1>
      <canvas
        style={{ border: '1px solid white', backgroundColor: 'white' }}
        id="myCanvas"
      ></canvas>
    </div>
  );
}

//TODO: Fix types.
const setupPaper = (): void => {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  canvas.width = 800;
  canvas.height = 600;

  const paper = new PaperScope();
  paper.setup(canvas);
  setupTool(paper);
};

const setupTool = (paper: any): void => {
  const { Tool, Path } = paper;

  const tool = new Tool();
  const path = new Path();

  path.strokeColor = 'black' as any;

  tool.onMouseDown = (event: any) => {
    path.add(event.point);
  };

  tool.onMouseDrag = (event: any) => {
    path.add(event.point);
  };
};


export default Paper;
