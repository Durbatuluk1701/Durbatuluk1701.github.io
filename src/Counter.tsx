import React, { useState } from "react";

const Counter: React.FC = (props) => {
    const [state, setState] = useState({ count: 0, stringCount: "0" });
    const addDelimitersToInt = (number: number) => {
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
  
    const incrementCount = (value: number) => {
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
        <div className="count">
          <h3>Count:</h3>
          <h1>{state.stringCount}</h1>
        </div>
        <div className="buttons">
          {
            nums.map((value) => {
              return (<button onClick={() => { incrementCount(value) }}>{((value > 0) ? "+" : "") + value.toString()}</button>);
            })
          }
        </div>
      </div>
    );
  }

  export default Counter;