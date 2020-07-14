import { PaperScope } from 'paper';

//TODO: Fix types.
const setupPaper = (): void => {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const paper = new PaperScope();
  paper.setup(canvas);
  setupTool(paper);
};

const setupTool = (paper: any): void => {
  const { Tool } = paper;
  const tool = new Tool();
  
  let path = createPath(paper);

  tool.onMouseDown = (event: any) => {
    path = createPath(paper);
    path.add(event.point);
  };

  tool.onMouseDrag = (event: any) => {
    path.add(event.point);
  };
};

const createPath = (paper: any) => {
    const { Path } = paper;
    const path = new Path();
    path.strokeColor = 'black' as any;
    return path;
}

export { setupPaper };
