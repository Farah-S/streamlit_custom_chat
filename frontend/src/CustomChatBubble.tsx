import { useEffect }  from "react";
import { Streamlit } from "streamlit-component-lib";
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

function ChatBubble({data:{role="",content=""}}, key:string){

  const BubbleStyle = {
      color: "#7377cb",
      backgroundColor: role==="user"?"#eef7ff":"#f8f2ff",
      // padding: "12px",
      paddingTop:"7px",
      paddingRight:"10px",
      paddingLeft:"10px",
      paddingBottom:"7px",
      "fontWeight":"100",
      maxWidth:"90%",
      // width:"fit-content",
      borderRadius:"2rem"
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
  
  useEffect(() => Streamlit.setFrameHeight());
  // TODO: only display image if prev message was of a diff user type, can add "prev" var that is sent to
  // the container from the app.py
  if(role==="assistant"){
    return (
      <Container key={key} fluid style={assistantContainerStyle}>
        <Row style={{backgroundColor:"transparent"}}>
          <Col xs={1} style={{backgroundColor:"transparent",width:"6%", paddingLeft:"5px", marginLeft: "30px",paddingTop: "2px"}}>
              <img alt="icon" src={require('./assets/images/robot_icon.png')} height={35} />
          </Col>
          <Col xs={10} style={BubbleStyle}>
            <Typography style={{whiteSpace:"pre-line",fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px"}}>
                  {content}
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
          <Typography style={{textAlign:"right",whiteSpace:"pre-line",fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px",}}>
                {content}
          </Typography>
        </Col>
        <Col xs={1}>
            <img alt="icon" src={require('./assets/images/person_icon.png')} height={43} />
        </Col>
      </Row>
    </Container>
  );
}

export default ChatBubble;
