import { Component, ReactNode }  from "react";
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

interface BubbleState {
  data: {role:string,content:string},
  key: string,
  style:{textColor:"#534eb1", userBackgroundColor:"rgb(232, 243, 255)", 
  agentBackgroundColor:"#f0efff", bubblePaddingRight:"10px", bubblePaddingLeft:"10px", 
  bubblePaddingBottom:"7px", bubblePaddingTop:"7px",
  fontWeight:"525", bubbleBorderRadius:"2rem", fontFamily:"itim"}
}

document.body.style.backgroundColor = "transparent";

class MessageBubble extends Component<BubbleState>{
  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    const { data, key, style } = this.props;
    const userColor=("userBackgroundColor" in style? style["userBackgroundColor"] : "rgb(232, 243, 255)")
    const agentColor=("agentBackgroundColor" in style? style["agentBackgroundColor"] : "#f0efff")
    const fontWeight=("fontWeight" in style? style["fontWeight"] : "525")
    const fontFamily=("fontFamily" in style? style["fontFamily"] : "itim")
    const BubbleStyle = {
      color: ("textColor" in style? style["textColor"] : "#534eb1"),
      backgroundColor: data.role==="user" ? userColor : agentColor, // 
      paddingTop: ("bubblePaddingTop" in style? style["bubblePaddingTop"] : "7px"),
      paddingRight: ("bubblePaddingRight" in style? style["bubblePaddingRight"] : "10px"),
      paddingLeft: ("bubblePaddingLeft" in style? style["bubblePaddingLeft"] : "10px"),
      paddingBottom: ("bubblePaddingBottom" in style? style["bubblePaddingBottom"] : "7px"),
      "fontWeight": "100",
      maxWidth:"90%",
      borderRadius: ("bubbleBorderRadius" in style? style["bubbleBorderRadius"] : "2rem")
    };

    const userContainerStyle = {
      width:"98%", 
      paddingTop:"10px", 
      paddingBottom:"10px", 
      height: "fit-content", 
      justifyContent:"center"
    };

    const assistantContainerStyle = {
      width:"98%", 
      paddingTop:"10px", 
      paddingBottom:"10px", 
      backgroundColor:"transparent", 
      marginLeft: "5px", 
      height: "fit-content", 
      justifySelf:"end"
    };
  
    if(data.role==="assistant"){
      return (
        <Container key={key} fluid style={assistantContainerStyle}>
          <Row style={{backgroundColor:"transparent"}}>
            <Col xs={1} style={{backgroundColor:"transparent",width:"6%", paddingLeft:"5px", marginLeft: "30px",paddingTop: "2px"}}>
                <img alt="icon" src={process.env.PUBLIC_URL + "robot_icon.png"} height={35} />
            </Col>
            <Col xs={10} style={BubbleStyle}>
              <Typography style={{whiteSpace:"pre-line",fontFamily: fontFamily, fontWeight: fontWeight, wordWrap: "break-word",  padding: "5px"}}>
                    {data.content}
              </Typography>
            </Col>
            <Col xs={1}>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container key={key} fluid style={userContainerStyle}>
        <Row style={{justifyContent:"end"}}>
          <Col xs={1}>
          </Col>
          <Col xs={10} style={BubbleStyle}>
            <Typography style={{textAlign:"right",whiteSpace:"pre-line",fontFamily: "itim", fontWeight: "500", wordWrap: "break-word",  padding: "5px",}}>
                  {data.content}
            </Typography>
          </Col>
          <Col xs={1}>
              <img alt="icon" src={process.env.PUBLIC_URL+("person_icon.png")} height={43} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MessageBubble;
