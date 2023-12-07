import React, { PropsWithChildren, useEffect, useState, useId, ReactNode }  from "react";
import {
  withStreamlitConnection, Streamlit, ComponentProps, StreamlitComponentBase,
} from "streamlit-component-lib";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import { Children } from "baseui/toast";
import { Button, } from "react-bootstrap";
import Icon  from "@mui/material/Icon";
import TextareaAutosize from 'react-textarea-autosize';

// import Gridy from "./CustomChatBubble";
interface PythonArgs2 {
  messages: [],
  key: string
}
document.body.style.backgroundColor = "transparent";

var prev=""
function Gridy({data:{role="",content=""}},key:string){
    // const {role, content}: PythonArgs = props.args;
    const BubbleStyle = {
        color: "#9093D8",
        backgroundColor: role==="assistant"?"#FBF5FF":"#F1FAFF",
        padding: "12px",
        paddingTop:"5px",
        paddingBottom:"5px",
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
        <Container fluid style={{width:"90%", paddingTop:"10px", paddingBottom:"8px", backgroundColor:"transparent", marginLeft: "20px", height: "fit-content", justifySelf:"end"}}>
          <Row style={{backgroundColor:"transparent"}}>
        
            <Col xs={1} style={{backgroundColor:"transparent", paddingRight:"15px", marginRight: "10px",paddingTop: "3px"}}>
                
                <img alt="icon" src={require('./assets/images/robot_icon.png')} height={35} />
              
            </Col>
            <Col xs={10} style={BubbleStyle}>
              <Typography style={{fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px"}}>
                    {content}
              </Typography>
            </Col>
            <Col xs={1}>
            </Col>
          </Row>
        </Container>
      );
    }
    //justifyContent:"end", display:"flex"paddingRight:"35px"
    return (

      <Container fluid style={{width:"80%", paddingTop:"10px", paddingBottom:"8px", height: "fit-content", justifyContent:"center"}}>
        <Row style={{justifyContent:"end", }}>
          <Col xs={1}>
          </Col>
          <Col xs={10} style={BubbleStyle}>
            <Typography style={{fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px",}}>
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

function Stack(messages:[]) {

    const chatBubbles =[]

    for (let index = 0; index < messages.length; index++) {
        chatBubbles.push(<Gridy data={messages[index]} key={messages[index]["key"]}/>);
    }

  return (
    <div>
      {chatBubbles}
    </div>
  );

}

interface State {
  lengthOfMessages:number,
  messages: []
}

interface PythonArgs3 {
  initialValue: ""
}

const ChatInput=()=>{
    const initialValue= "";
   
  // console.log(props.args);
  const [value, setValue] = useState<string>(initialValue);
  useEffect(() => Streamlit.setFrameHeight());

const handleClick = () => {
    // "message" stores input field value
    setValue(value);
    Streamlit.setComponentValue(value)
    console.log(value)
  };
  return (
    <footer style={{  position: "relative",
  left: 0,minHeight:"cal(100vh - 34px)",
  bottom: 0,
}}>
    <Row style={{ justifyContent:"center", paddingTop:"10px"}}>
          <TextareaAutosize placeholder="Type here.." value={value} onChange={(
                ev: React.ChangeEvent<HTMLTextAreaElement>,
            ): void => setValue(ev.target.value)} autoFocus style={{resize:"none", marginLeft:"0px", marginRight:"10px",marginTop:"7px", width:"550px", borderRadius:"1rem",boxShadow: "none",maxBlockSize:"75px",borderColor: "transparent",backgroundColor: "#f1faff"}}/>
      
        <Button type="submit" onClick={handleClick} style={{width:"55px", borderRadius: "3rem", paddingRight:"5px",paddingTop:"8px", paddingLeft:"9px", display: "flex", justifyContent:"center", backgroundColor: "#f8efff", color: "#5b5b5c",borderColor:"transparent", height:"42px"}} >
          <Icon baseClassName="material-symbols-outlined">send</Icon>
        </Button>
    </Row></footer>
  );
}

class ChatContainer extends StreamlitComponentBase<State>{
  public state:State = {lengthOfMessages:0,messages:[]}
  private onClicked = (): void => {
    // console.log('Clicked')
    // console.log({row_num})
    // console.log({col_num})
    // console.log(this.state.board_state[row_num][col_num])

   
    // console.log({num_players})
    // console.log({dict})

    // this.state.messages[row_num].splice(col_num,1,dict)

    this.setState(
      prevState => ({ messages:prevState.messages}),
      () => Streamlit.setComponentValue(this.state.messages)
    )
  }


  // /** Focus handler for our "Click Me!" button. */
  // private _onFocus = (): void => {
  //   this.setState({ isFocused: true })
  // }

  // /** Blur handler for our "Click Me!" button. */
  // private _onBlur = (): void => {
  //   this.setState({ isFocused: false })
  // }

   public render = (): ReactNode => {
    // Arguments passed to the plugin from Python
    
    
    const prevlength:number = this.props.args["prevlength"]
    const messages_ss:[] = this.props.args["messages"]

    const change = (JSON.stringify(this.state.messages) !== JSON.stringify(messages_ss))

    if (messages_ss !== null) {
      this.state.messages = messages_ss
    }

    if (messages_ss !== null && change){
      Streamlit.setComponentValue(this.state.messages)
    }

    // // Check if board has been resized
    // if (this.state.board_state.length !== rows || this.state.board_state[0].length !== cols) {   
    //   this.state.activePlayer = 1
    //   this.state.action = 1
    //   this.state.board_state = new BoardState(rows,cols)
    //   this.state.turn = 1
    //   Streamlit.setComponentValue(this.state.board_state)
    // }


    return (
      <div>
      <Paper
        sx={{
          p: 2,
          minHeight:"400px",
          // maxWidth: "90%",
          borderRadius:"2rem",
          // margin: 'auto',
          // display:"grid",
          marginLeft:"25px",
          marginRight:"25px",
          // boxShadow:"inset 0px 0 15px 1px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          boxShadow:"inset 0px 0 20px 5px rgb(235 158 158 / 11%), 0px 0px 0px 0px rgb(0 0 0 / 8%), 0px 1px 3px 0px rgb(0 0 0 / 0%)",
          flexGrow: 20,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#FFFAFA', 
            // #fffeff
        }}
      >
       {Stack(this.state.messages)}

    {/* <div style={{justifyContent:"end"}}> */}
      
    {/* </div> */}
    </Paper>
      <input onSubmit={this.onClicked}/>
    </div>
      // <span>
      //   Hello, {name}! &nbsp;
      //   <button
      //     style={style}
      //     onClick={this.onClicked}
      //     disabled={this.props.disabled}
      //     onFocus={this._onFocus}
      //     onBlur={this._onBlur}
      //   >
      //     Click Me!
      //   </button>
      // </span>
    )
  }
  
}

// const ChatContainer=(props: ComponentProps)=>{
//     var {messages}: PythonArgs2 = props.args;
    
//   // console.log(props.args);
//   // const [value, setValue] = useState(initialValue);
// //   useEffect(() => Streamlit.setFrameHeight());
//     // chatBubbles.push(<Gridy data={{"role":"assistant","content":"Hello! How may I help you?"}} />);



//   return (
//      //   <Row>
//     // <Col xs={2}>
//     //   <button style={{width:"100px"}}/>
//     //   <button style={{width:"100px"}}/>
//     // </Col>
//     // <Col  xs={10}>
//     <Container>
   
//     <Paper
//         sx={{
//           p: 2,
//           minHeight:"400px",
//           // maxWidth: "90%",
//           borderRadius:"2rem",
//           // margin: 'auto',
//           // display:"grid",
//           marginLeft:"25px",
//           marginRight:"25px",
//           // boxShadow:"inset 0px 0 15px 1px rgba(0,0,0,0.05), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
//           boxShadow:"inset 0px 0 20px 5px rgb(235 158 158 / 11%), 0px 0px 0px 0px rgb(0 0 0 / 8%), 0px 1px 3px 0px rgb(0 0 0 / 0%)",
//           flexGrow: 20,
//           backgroundColor: (theme) =>
//             theme.palette.mode === 'dark' ? '#1A2027' : '#FFFAFA', 
//             // #fffeff
//         }}
//       >
//        {chatBubbles}

//     {/* <div style={{justifyContent:"end"}}> */}
      
//     {/* </div> */}
//     </Paper>
    
    
    
    
//     </Container>
//     // <footer style={{position:"fixed", bottom: 0}}>
//     //   {/* <div style={phantom} /> */}
//     //     <Row style={{ justifyContent:"center", paddingTop:"10px"}}>
//     //     {/* <input autoFocus style={{marginLeft:"0px", marginRight:"10px", width:"550px", borderRadius:"1rem",boxShadow: "none", }}/> */}
//     //     {/* <Container style={{maxHeight:"75px"}}> */}
//     //       <TextareaAutosize autoFocus style={{resize:"none", marginLeft:"0px", marginRight:"10px",marginTop:"7px", width:"550px", borderRadius:"1rem",boxShadow: "none",maxBlockSize:"75px",borderColor: "transparent",backgroundColor: "#f1faff"}}/>
//     //     {/* </Container> */}
//     //     <Button type="button" style={{width:"55px", borderRadius: "3rem", paddingRight:"5px",paddingTop:"8px", paddingLeft:"9px", display: "flex", justifyContent:"center", backgroundColor: "#f8efff", color: "#5b5b5c",borderColor:"transparent", height:"42px"}} >
//     //       <Icon baseClassName="material-symbols-outlined">send</Icon>
//     //     </Button>
//     // </Row>
//     // </footer>
//     // </Col>
//     // </Row>
//   );
// }

export default withStreamlitConnection(ChatContainer);