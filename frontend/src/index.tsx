//file that renders the react components
import React from "react";
import ReactDOM from "react-dom";
import ChatContainer from "./ChatContainer";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { ThemeProvider, LightTheme } from "baseui";

const engine = new Styletron();

ReactDOM.render(
  
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>
        <ChatContainer/>
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);