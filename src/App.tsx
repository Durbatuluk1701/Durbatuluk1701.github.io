import React from "react"
import TextBoxItem from "./TextBoxItem"
import Counter from "./Counter"
import Header from "./Header"
import DeadLanding from "./DeadLanding"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

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
        <Router>
          <Header/>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">
              <div>
                <h1>HI</h1>
              </div>
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/textbox">
              <TextBoxItem />
            </Route>
            <Route>
              <DeadLanding />
            </Route>
          </Switch>
        </Router>
    )
}

export default App;