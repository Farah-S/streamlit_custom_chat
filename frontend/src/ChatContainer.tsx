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
  const chatBubbles=[]
  
  for (let index = 0; index < messages.length; index++) {
    chatBubbles.push(<ChatBubble data={{"role":messages[index]["role"],"content":messages[index]["content"]}} key={messages[index]["key"]} />);
  }
  
  useEffect(() => Streamlit.setFrameHeight());
  
  return (
    <Row>
      <Col xs={1}>
        <button style={{width:"100px"}}/>
        <button style={{width:"100px"}}/>
      </Col>
      <Col  xs={11}>
        <Paper
            sx={{
              p: 2,
              minHeight:"550px",
              borderRadius:"2rem",
              marginLeft:"25px",
              marginRight:"25px",
              boxShadow:"inset 0px 0 20px 5px rgb(219 219 219 / 11%), 0px 0px 0px 0px rgb(0 0 0 / 8%), 0px 1px 3px 0px rgb(0 0 0 / 0%)",
              flexGrow: 20,
              backgroundColor: '#fdfaff'
            }}
          >
          {chatBubbles}
        </Paper>
      </Col>
    </Row>
  );
}

export default withStreamlitConnection(ChatContainer);