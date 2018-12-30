import React, { Component } from "react";
import Toolbar from "./components/toolbar";
import Editor from "./components/editor";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="editor__container">
          <Toolbar />
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
