import React, { useState } from "react";

const TextBoxItem: React.FC = (props) => {
    const [words, setWords] = useState<string[]>([]);
  
  
  
    const addListItem = () => {
      let addBox = document.getElementById("listAdded");
      if (addBox && addBox.textContent) {
        setWords([addBox.textContent , ...words]);
      }
    }

    return (
      <div>
        <h3>Word List:</h3>
        <div>
          {
            words.map((word) => {
              let fontWeight = ["fizz", "buzz"].includes(word) ? 1000 : 100;
              return (
                <h4
                  style={{
                    "fontWeight": fontWeight,
                    "display": "inline-block",
                    "margin": "0px 2.5px 10px 2.5px"
                  }}>
                  {word + (words.length > 1 && words[words.length - 1] !== word ? ", " : " ")}
                </h4>
              )
            })
          }
        </div>
        <input id="listAdded"></input>
        <button onClick={() => { addListItem() }}>Add Item</button>
      </div>
    );
  }

  export default TextBoxItem;