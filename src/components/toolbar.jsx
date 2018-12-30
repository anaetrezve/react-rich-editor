import React, { Component } from "react";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  InsertPhoto,
  InsertLink,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  Code
} from "@material-ui/icons";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "toolbar__item",
      icons: [
        { title: "Bold", icon: <FormatBold /> },
        { title: "Italic", icon: <FormatItalic /> },
        { title: "Underline", icon: <FormatUnderlined /> },
        { title: "Unordered List", icon: <FormatListBulleted /> },
        { title: "Ordered List", icon: <FormatListNumbered /> },
        { title: "Quote", icon: <FormatQuote /> },
        { title: "Insert Image", icon: <InsertPhoto /> },
        { title: "Insert Link", icon: <InsertLink /> },
        { title: "Align Left", icon: <FormatAlignLeft /> },
        { title: "Align Center", icon: <FormatAlignJustify /> },
        { title: "Align Right", icon: <FormatAlignRight /> },
        { title: "HTML Preview", icon: <Code /> }
      ]
    };
    this.handleInputFile = React.createRef();
  }

  handleInputImage = e => {
    this.handleInputFile.current.click();
  };

  toggleClass = e => {
    const target = e.currentTarget;
    // let isActive = target.classList.value.includes("active");
    // isActive
    //   ? target.classList.remove("active")
    //   : target.classList.add("active");

    this.runCommand(target.dataset.id);
  };

  handleSave = e => {
    console.log("saved");
  };

  handleCancel = e => {
    console.log("Canceled");
  };

  handleChangeInput = e => {
    const file = e.target.files.item(0);
    const fr = new FileReader();
    fr.onload = function() {
      document.execCommand("insertImage", false, fr.result);
    };
    fr.readAsDataURL(file);
  };

  render() {
    const { icons } = this.state;

    return (
      <header className="toolbar__container">
        <div className="toolbar">
          {icons.map((icon, index) => {
            return (
              <span
                title={icon.title}
                onClick={this.toggleClass}
                key={index}
                data-id={index}
                className={this.state.classes}
              >
                {icon.icon}
              </span>
            );
          })}

          <div className="right-aligned-menus">
            <input
              type="file"
              id="image-file-browser"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              ref={this.handleInputFile}
              onChange={this.handleChangeInput}
            />
            <span onClick={this.handleCancel} title="Cancel" size="small">
              <CancelIcon />
            </span>
            <span onClick={this.handleSave} title="Save" size="small">
              <SaveIcon />
            </span>
          </div>
        </div>
      </header>
    );
  }

  runCommand(id) {
    if (id === "0") {
      document.execCommand("bold");
    } else if (id === "1") {
      document.execCommand("italic");
    } else if (id === "2") {
      document.execCommand("underline");
    } else if (id === "3") {
      document.execCommand("insertUnorderedList");
    } else if (id === "4") {
      document.execCommand("insertOrderedList");
    } else if (id === "5") {
      document.execCommand("formatBlock", false, "blockquote");
    } else if (id === "6") {
      this.handleInputImage();
      // document.execCommand("insertImage", false, "http://placehold.it/200x150");
    } else if (id === "7") {
      document.execCommand("createLink", false, null);
    } else if (id === "8") {
      document.execCommand("justifyLeft");
    } else if (id === "9") {
      document.execCommand("justifyCenter");
    } else if (id === "10") {
      document.execCommand("justifyRight");
    } else if (id === "11") {
      document.execCommand("formatBlock", false, "pre");
    }
  }
}

export default Toolbar;
