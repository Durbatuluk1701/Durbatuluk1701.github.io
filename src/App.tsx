import React from "react"
import TextBoxItem from "./TextBoxItem"
import Counter from "./Counter"

const App: React.FC = () => {
        
    var interval: NodeJS.Timeout;
  
    window.addEventListener("blur", () => {
        var string = "Come Back Soon!!!      ";
        document.title = string;
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
        <>
            <Counter />
            <TextBoxItem />
        </>
    )
}

export default App;