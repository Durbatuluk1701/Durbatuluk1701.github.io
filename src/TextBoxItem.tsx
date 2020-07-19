import React, { useState } from "react";

const TextBoxItem: React.FC = (props) => {
    const [words, setWords] = useState<string[]>([]);
  
  
  
    const addListItem = () => {
      let addBox = document.getElementById("listAdded") as HTMLInputElement;
      if (addBox) {
        setWords([addBox.value , ...words]);
      }
    }
    var itemKeys = 0;

    return (
      <div>
        <h3>Word List:</h3>
        <div>
          {
            words.map((word) => {
              itemKeys++;
              let fontWeight = ["fizz", "buzz"].includes(word) ? 1000 : 100;
              return (
                <h4
                  key={itemKeys}
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
        <input id="listAdded" />
        <button onClick={() => { addListItem() }}>Add Item</button>
      </div>
    );
  }

  export default TextBoxItem;