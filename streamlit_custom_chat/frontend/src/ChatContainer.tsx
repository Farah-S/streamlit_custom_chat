import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import { ReactNode } from "react"
import { Col, Row } from "react-bootstrap"
import Paper from '@mui/material/Paper';
import MessageBubble from "./ChatBubble";

interface State {
  messages: [],
  key: string,
  overflowY:"auto", scrollBackgroundColor:"transparent",
  containerBorderColor:"transparent",containerBorderRadius:"2rem", containerHeight:"550px",
  containerBoxShadow:"inset 0px 0 20px 5px rgb(219 219 219 / 11%), 0px 0px 0px 0px rgb(0 0 0 / 8%), 0px 1px 3px 0px rgb(0 0 0 / 0%)",
  containerBackgroundColor:"#fafaff", textColor:"#534eb1", userBackgroundColor:"rgb(232, 243, 255)", 
  agentBubbleBackgroundColor:"#f0efff", bubblePaddingRight:"10px", bubblePaddingLeft:"10px", 
  bubblePaddingBottom:"7px", bubblePaddingTop:"7px",
  fontWeight:"525", bubbleBorderRadius:"2rem", fontFamily:"itim"
}
document.body.style.backgroundColor = "transparent";

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class ChatContainer extends StreamlitComponentBase<State> {
  //overflowY
  //scrollBackgroundColor
  //borderColor
  //height
  //boxShadow
  //backgroundColor
  //p
  //containerBorderRadius
  //---------------------
  //textColor
  //userBubbleBackgroundColor
  //agentBubbleBackgroundColor
  //bubblePaddingRight
  //bubblePaddingLeft
  //bubblePaddingBottom
  //bubblePaddingTop
  //fontWeight
  //bubbleBorderRadius
  

  public render = (): ReactNode => {
    const { messages, key, overflowY, scrollBackgroundColor,
  containerBorderColor,containerBorderRadius, containerHeight,
  containerBoxShadow,
  containerBackgroundColor, textColor, userBackgroundColor, 
  agentBubbleBackgroundColor, bubblePaddingRight, bubblePaddingLeft, 
  bubblePaddingBottom, bubblePaddingTop,
  fontWeight, bubbleBorderRadius, fontFamily} = this.props.args;

    const paperStyle={
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      scrollMarginTop: "50px",
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.0)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: scrollBackgroundColor,
      outline: '1px solid rgba(0,0,0,0.25)',
      borderRadius: 8,
    },
    borderColor: containerBorderColor,
    borderStyle: "solid",
    overflowY: overflowY,
    p: 2,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
    height: containerHeight,
    borderRadius: containerBorderRadius,
    marginLeft:"5%",
    marginRight:"5%",
    boxShadow: containerBoxShadow,
    backgroundColor: containerBackgroundColor,
  }
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    // let messages = this.props.args.messages
    
    const chatBubbles=[];
    for (let index = 0; index < messages.length; index++) {
      chatBubbles.push(<MessageBubble data={{role:messages[index]["role"],content:messages[index]["content"]}} key={messages[index]["key"]} textColor={textColor} userBackgroundColor={userBackgroundColor}
        agentBubbleBackgroundColor={agentBubbleBackgroundColor} bubblePaddingRight={bubblePaddingRight}
        bubblePaddingLeft={bubblePaddingLeft} bubblePaddingBottom={bubblePaddingBottom} bubblePaddingTop={bubblePaddingTop}
        fontWeight={fontWeight} bubbleBorderRadius={bubbleBorderRadius} fontFamily={fontFamily}/>);
      // console.log(messages.length)
    }
      
    return (
      <Row>
        <Col style={{width:"100%"}}>
          <Paper sx={paperStyle}>
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
