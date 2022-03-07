import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.show("Converted to Uppercase", "success");
    // setText("Your text has changed");
  };

  const handleLoClick = () => {
    console.log("button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.show("Converted to Lowercase", "success");

    // setText("Your text has changed");
  };

  const handleOnChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter text here");
  var arr = text.split(" ")

  // text = "new text"; //Wrong way to update state
  // setText("new text"); //Correct way to update state
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          id="analyzeText"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length > 0
            ? arr.splice(arr.indexOf(" ")).length
            : 0}{" "}
          words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview here."}
        </p>
      </div>
    </>
  );
}
