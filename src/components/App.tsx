import "./App.css";
import Chat from "./chat/Chat";
import Navbar from "./navbar/Navbar";
import React from "react";
import Word from "./word-pane/Word";
import DrawingPane from "./drawing-pane/DrawingPane";

function App() {
  return (
    <div className="flex--column">
      <div className="border-outline"><Navbar></Navbar></div>
      <div className="border-outline"><Word></Word></div>
      <div className="flex--row border-outline">
        <DrawingPane></DrawingPane>
        <div className="flex--column border-outline">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
}

export default App;