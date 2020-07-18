import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const Counter = (props) => {
  const [state, setState] = useState({ count: 0, stringCount: "0" });
  const addDelimitersToInt = (number) => {
    // Both rely on this returnString here
    let returnString = "";
    // Method 1
    for (; number !== 0; number = Math.floor(number / 1000)) {
      let last3 = number.toString().substr(-3, 3);
      returnString = (number >= 1000) ? "," + last3.concat(returnString) : last3.concat(returnString);
    }
    // // Method 2
    // while (number !== 0) {
    //   let last3 = number.toString().substr(-3, 3);
    //   returnString = (number >= 1000) ? "," + last3.concat(returnString) : last3.concat(returnString);
    //   number = Math.floor(number / 1000);
    // }
    return (returnString);
  }

  const incrementCount = (value) => {
    const newNumber = state.count + value;
    const newString = addDelimitersToInt(newNumber);
    setState({
      count: newNumber,
      stringCount: newString
    });
  };

  let nums = [1, 5, 10, 100, 1000];
  return (
    <div>
      <div class="count">
        <h3>Count:</h3>
        <h1>{state.stringCount}</h1>
      </div>
      <div class="buttons">
        {
          nums.map((value) => {
            return (<button onClick={() => { incrementCount(value) }}>{((value > 0) ? "+" : "") + value.toString()}</button>);
          })
        }
      </div>
    </div>
  );
}

const TextBoxItem = (props) => {
  const [words, setWords] = useState([]);



  const addListItem = () => {
    setWords([document.getElementById("listAdded").value, ...words]);
  }

  var interval = 0;

  window.addEventListener("blur", () => {
    var string = "Come Back Soon!!!      ";
    interval = setInterval(() => {
      string = string.substr(1, string.length-1) + string[0];
      document.title = string;
    }, 1000);
  })

  window.addEventListener("focus", () => {
    clearInterval(interval);
    document.title = "Will Thomas";
  })

  return (
    <div>
      <Counter />
      <div>
        <div>
          <h3>Word List:</h3>
          <div>
            {
              words.map((word) => {
                return (
                  <h4
                    style={{
                      "fontWeight": `${["fizz", "buzz"].includes(word) ? "bold" : "normal"}`,
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
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <TextBoxItem message="HI" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
