import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: ""
    };

    this.handleEditorState = this.handleEditorState.bind(this);
  }

  handleEditorState(e) {
    const html = e.currentTarget.innerHTML.replace(/&nbsp;/gi, " ");

    this.setState({
      editorContent: html
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log(this.state.editorContent);
    return (
      <div className="editor__wrapper">
        <div
          className="editor__content"
          contentEditable
          // onKeyUp={this.handleEditorState}
          // onSelect={this.handleEditorState}
          onInput={this.handleEditorState}
          dangerouslySetInnerHTML={{ __html: this.state.editorContent }}
        />
      </div>
    );
  }
}

export default Editor;
