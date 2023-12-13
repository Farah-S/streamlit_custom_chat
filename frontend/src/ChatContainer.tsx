import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Paper from '@mui/material/Paper';
import ChatBubble from "./CustomChatBubble";

interface State {
  messages: [],
  key: string,
}
document.body.style.backgroundColor = "transparent";

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class ChatContainer extends StreamlitComponentBase<State> {
  // public state = { messages: [], key: "" }
  private paperStyle={
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      scrollMarginTop: "50px",
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.0)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor:"transparent",
      // backgroundColor: 'rgba(0,0,0,0)',
      outline: '1px solid rgba(0,0,0,0.25)',
      borderRadius: 8,
    },
    borderColor:"transparent",
    borderStyle: "solid",
    overflowY:"scroll",
    p: 2,
    // marginBottom:"0",
    height:"550px",
    borderRadius:"2rem",
    marginLeft:"5%",
    marginRight:"5%",
    boxShadow:"inset 0px 0 20px 5px rgb(219 219 219 / 11%), 0px 0px 0px 0px rgb(0 0 0 / 8%), 0px 1px 3px 0px rgb(0 0 0 / 0%)",
    // flexGrow: 20,
    backgroundColor: '#fafaff',
    // width:"85%"
  }

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    let messages = this.props.args.messages
    
    const chatBubbles=[];
    for (let index = 0; index < messages.length; index++) {
      let props={data:{role:messages[index]["role"],content:messages[index]["content"]},key:messages[index]["key"]}
      chatBubbles.push(<ChatBubble {...props} />);
    }
    
    // useEffect(() => Streamlit.setFrameHeight());
  
    return (
      <Row>
        <Col style={{width:"100%"}}>
          <Paper sx={this.paperStyle}>
            {chatBubbles}
          </Paper>
        </Col>
      </Row>
    )
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(ChatContainer)
