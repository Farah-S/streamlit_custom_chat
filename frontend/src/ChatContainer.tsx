import React, { PropsWithChildren, useEffect, useState }  from "react";
import {
  withStreamlitConnection, Streamlit, ComponentProps,
} from "streamlit-component-lib";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import { Children } from "baseui/toast";
import { Button } from "react-bootstrap";
import Icon  from "@mui/material/Icon";
// import Gridy from "./CustomChatBubble";
interface PythonArgs2 {
  messages: []
}
document.body.style.backgroundColor = "transparent";

var prev=""
function Gridy({data:{role="",content=""}}){
    // const {role, content}: PythonArgs = props.args;
    const BubbleStyle = {
        color: "#9093D8",
        backgroundColor: role==="assistant"?"#FBF5FF":"#F1FAFF",
        padding: "12px",
        // "width":"fit-content",
        "fontWeight":"100",
        maxWidth:"90%",
        borderRadius:"2rem"
      };
    // console.log(props.args);
    // const [value, setValue] = useState(initialValue);
    useEffect(() => Streamlit.setFrameHeight());
    if(role==="assistant"){
      return (
        <Container fluid style={{width:"90%", paddingTop:"10px", paddingBottom:"8px", backgroundColor:"transparent", marginLeft: "20px"}}>
          <Row style={{backgroundColor:"transparent"}}>
        
            <Col xs={1} style={{backgroundColor:"transparent", paddingRight:"15px", marginRight: "10px",paddingTop: "6px"}}>
                
                <img alt="icon" src={require('./assets/images/robot_icon.png')} height={35} />
              
            </Col>
            <Col xs={10} style={BubbleStyle}>
              <Typography style={{fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px"}}>
                    {content}
              </Typography>
            </Col>
          </Row>
        </Container>
      );
    }
    return (

      <Container fluid style={{width:"90%", paddingTop:"10px", paddingBottom:"8px"}}>
        <Row style={{justifyContent:"end", display:"flex"}}>
          <Col xs={10} style={BubbleStyle}>
            <Typography style={{fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px"}}>
                  {content}
            </Typography>
          </Col>
          <Col xs={1}>
              <img alt="icon" src={require('./assets/images/person_icon.png')} height={45} />
          </Col>
        </Row>
      </Container>
    );
  }

const ChatContainer=(props: ComponentProps)=>{
    const {messages}: PythonArgs2 = props.args;
    const chatBubbles =[]
  // console.log(props.args);
  // const [value, setValue] = useState(initialValue);
//   useEffect(() => Streamlit.setFrameHeight());
    // chatBubbles.push(<Gridy data={{"role":"assistant","content":"Hello! How may I help you?"}} />);

    for (let index = 0; index < messages.length; index++) {
        chatBubbles.push(<Gridy data={messages[index]} />);
    }

  return (
    <Paper
        sx={{
          p: 2,
          minHeight:"400px",
          maxWidth: "60%",
          borderRadius:"2rem",
          margin: 'auto',
          // boxShadow:"inset 0px 0 15px 1px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          boxShadow:"inset 0px 0 20px 5px rgb(235 158 158 / 11%), 0px 0px 0px 0px rgb(0 0 0 / 8%), 0px 1px 3px 0px rgb(0 0 0 / 0%)",
          flexGrow: 20,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#FFFAFA', 
            // #fffeff
        }}
      >
       {chatBubbles}
    <Row>
      <input autoFocus style={{marginLeft:"15px", marginRight:"15px", width:"550px", borderRadius:"1rem",boxShadow: "none", }}/>
      <Button type="button" style={{width:"150px"}} >
        <Icon baseClassName="material-symbols-outlined">send</Icon>
        </Button>
    </Row>
    </Paper>
  );
}
export default withStreamlitConnection(ChatContainer);