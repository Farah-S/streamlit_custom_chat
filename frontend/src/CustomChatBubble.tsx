import { useEffect }  from "react";
import { Streamlit } from "streamlit-component-lib";
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

function ChatBubble({data:{role="",content=""}}, key:string){

  const BubbleStyle = {
      color: "#9093D8",
      backgroundColor: role==="user"?"#f1f8ff":"#faf4ff",
      padding: "12px",
      paddingTop:"5px",
      paddingBottom:"5px",
      "fontWeight":"100",
      maxWidth:"90%",
      borderRadius:"2rem"
    };

  const userContainerStyle = {
      width:"93%", 
      paddingTop:"10px", 
      paddingBottom:"8px", 
      height: "fit-content", 
      justifyContent:"center"
    };

  const assistantContainerStyle = {
      width:"93%", 
      paddingTop:"10px", 
      paddingBottom:"8px", 
      backgroundColor:"transparent", 
      marginLeft: "20px", 
      height: "fit-content", 
      justifySelf:"end"
    };
  
  useEffect(() => Streamlit.setFrameHeight());

  if(role==="assistant"){
    return (
      <Container key={key} fluid style={assistantContainerStyle}>
        <Row style={{backgroundColor:"transparent"}}>
          <Col xs={1} style={{backgroundColor:"transparent", paddingRight:"15px", marginRight: "10px",paddingTop: "3px"}}>
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
          <Typography style={{whiteSpace:"pre-line",fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px",}}>
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

export default ChatBubble;
