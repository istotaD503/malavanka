import React from 'react';
import DrawingArea from './DrawingArea';
import DrawingTools from './DrawingTools';

function DrawingPane() {

  return (
    <div className="drawing-pane">
        <DrawingArea></DrawingArea>
        <DrawingTools></DrawingTools>
    </div>
  );
}

export default DrawingPane;
