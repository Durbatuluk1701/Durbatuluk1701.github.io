import React, { useState } from "react"
import TextBoxItem from "./TextBoxItem"
import Counter from "./Counter"
import Header from "./Header"
import DeadLanding from "./DeadLanding"

const App: React.FC = () => {
    const [internalRoute, setInternalRoute] = useState("/");
        
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
    const HomePage = () => {
      return (
        <div>
          <h1>Hello There</h1>
          <p style={{fontSize: "20px"}}>
            This is my website, it is mostly just an exploration
            into how farm I can push the static site capabilities of
            GitHub Pages with my own Internal Routing components I have
            made for React. All of this can be pushed into a single file,
            with React Conditional rendering based upon given paths and 
            the current state of the Internal Routing watch.
          </p>
        </div>
      )
    }

    interface RouteProps {
      path: string;
      component: JSX.Element
    }

    const Route = ({path, component}: RouteProps): JSX.Element => {
      if (internalRoute === path) {
        return (component)
      }
      return <></>
    }

    return (
      <>
        <Header internalController={setInternalRoute}/>
        <Route path="/" component={<HomePage />} />
        <Route path="/home" component={<HomePage />} />
        <Route path="/counter" component={<Counter />} />
        <Route path="/textbox" component={<TextBoxItem />} />
        <Route path="/404" component={<DeadLanding internalController={setInternalRoute}/>} />
      </>
    )
}

export default App;