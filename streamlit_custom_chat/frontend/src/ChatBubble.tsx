import { Component, ReactNode }  from "react";
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

interface State {
  data: {role:string,content:string},
  key: string,
}

document.body.style.backgroundColor = "transparent";

class MessageBubble extends Component<State>{
  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    const { data, key } = this.props;
    
    const BubbleStyle = {
      color: "rgb(61, 48, 96)",
      backgroundColor: data.role==="user"?"rgb(228, 241, 255)":"rgb(234, 233, 255)", // 
      paddingTop:"7px",
      paddingRight:"15px",
      paddingLeft:"15px",
      paddingBottom:"7px",
      "fontWeight":"100",
      maxWidth:"90%",
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
  
    if(data.role==="assistant"){
      return (
        <Container key={key} fluid style={assistantContainerStyle}>
          <Row style={{backgroundColor:"transparent"}}>
            <Col xs={1} style={{backgroundColor:"transparent",width:"6%", paddingLeft:"5px", marginLeft: "30px",paddingTop: "2px"}}>
                <img alt="icon" src={process.env.PUBLIC_URL + "robot_icon.png"} height={35} />
            </Col>
            <Col xs={10} style={BubbleStyle}>
              <Typography style={{whiteSpace:"pre-line",fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px"}}>
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
