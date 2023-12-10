import { useEffect }  from "react";
import { withStreamlitConnection, Streamlit, ComponentProps } from "streamlit-component-lib";
import Paper from '@mui/material/Paper';
import ChatBubble from './CustomChatBubble';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

interface ChatContainerArgs {
  messages: [],
  key: string,
}

document.body.style.backgroundColor = "transparent";

const ChatContainer=(props: ComponentProps)=>{
  var {messages}: ChatContainerArgs = props.args;
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
                backgroundColor:"#fdfaff",
                // backgroundColor: 'rgba(0,0,0,0)',
                outline: '1px solid rgba(0,0,0,0.2)',
                borderRadius: 8,
              },
              borderColor:"#f4efff",
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
              backgroundColor: '#fdfaff',
              // width:"85%"
            }

  const chatBubbles=[]
  for (let index = 0; index < messages.length; index++) {
    chatBubbles.push(<ChatBubble data={{"role":messages[index]["role"],"content":messages[index]["content"]}} key={messages[index]["key"]} />);
  }
  
  useEffect(() => Streamlit.setFrameHeight());
  
  return (
    <Row>
      {/* <Col xs={1} style={{width:"10%"}}>
        <button style={{width:"80%"}}/>
        <button style={{width:"80%"}}/>
      </Col> */}
      <Col  style={{width:"100%"}}>
        <Paper
            sx={paperStyle}
          >
          {chatBubbles}
        </Paper>
      </Col>
    </Row>
  );
}

export default withStreamlitConnection(ChatContainer);