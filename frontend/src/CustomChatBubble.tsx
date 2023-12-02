//this is the react file that contains the custom component specs
import React, { useEffect, useState }  from "react";
import {
  withStreamlitConnection, Streamlit, ComponentProps,
} from "streamlit-component-lib";
import { Slider } from "baseui/slider";

//role: str="assistant", content: str="", key=None
// const CustomSlider = (props: ComponentProps) => {
//   const {label, minValue, maxValue, initialValue}: PythonArgs = props.args;
//   console.log(props.args);
//   const [value, setValue] = useState(initialValue);
//   useEffect(() => Streamlit.setFrameHeight());
//   return ( <>
//       <h3>{label}</h3>
//       <Slider
//         value={value}
//         onChange={({ value }) => value && setValue(value)}
//         onFinalChange={({ value }) => Streamlit.setComponentValue(value)}
//         min={minValue}
//         max={maxValue}
//       />
//     </>);
// };

// // Link the component to Streamlit JS events.
// export default withStreamlitConnection(CustomSlider);


  // import * as React from 'react';
  import { styled } from '@mui/material/styles';
  import Grid from '@mui/material/Grid';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography';
  import ButtonBase from '@mui/material/ButtonBase';
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Col from 'react-bootstrap/Col';
  // const PersonImg = Image(src='chat_bubble/frontend/public/person_icon.png')({
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // });
  // Assuming logo.png is in public/ folder of your project
  {/* <img src={process.env.PUBLIC_URL + '/person_icon.png'} alt="personlogo" /> */}
  document.body.style.backgroundColor = "transparent";

  interface PythonArgs {
    role: string
    content: string
  }

  const CustomChatBubble=(props: ComponentProps)=>{
    const {role, content}: PythonArgs = props.args;
    const BubbleStyle = {
        color: "#9093D8",
        backgroundColor: role==="assistant"?"#fbf4ff":"#f1f2ff",
        padding: "10px",
        "width":"fit-content",
        "fontWeight":"100",
        borderRadius:"2rem"
      };
    // console.log(props.args);
    // const [value, setValue] = useState(initialValue);
    useEffect(() => Streamlit.setFrameHeight());
    if(role==="assistant"){
      return (
        <Container fluid style={{width:"60%", paddingTop:"5px", paddingBottom:"5px", backgroundColor:"transparent"}}>
          <Row style={{backgroundColor:"transparent"}}>
            <Col xs={1} style={{backgroundColor:"transparent"}}>
              <img alt="icon" src={require('./assets/images/robot_icon.png')} height={40} />
            </Col>
            <Col xs={11} style={BubbleStyle}>
              <Typography style={{fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px"}}>
                    {content}
              </Typography>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container fluid style={{width:"60%", paddingTop:"5px", paddingBottom:"5px"}}>
        <Row style={{justifyContent:"end", display:"flex"}}>
          <Col xs={11} style={BubbleStyle}>
            <Typography style={{fontFamily: "itim", fontWeight: "525", wordWrap: "break-word",  padding: "5px"}}>
                  {content}
            </Typography>
          </Col>
          <Col xs={1}>
            <img alt="icon" src={require('./assets/images/person_icon.png')} height={50} />
          </Col>
        </Row>
      </Container>
    );
  }
  export default withStreamlitConnection(CustomChatBubble);
// export default function ComplexGrid(props: ComponentProps) {
//   const {role, content}: PythonArgs = props.args;
//   // if(role=="user"){
    
//   // }
//   // else if(role=="assistant"){

//   // }
//   return (
//     <Paper
//       sx={{
//         p: 2,
//         margin: 'auto',
//         maxWidth: 500,
//         flexGrow: 1,
//         backgroundColor: (theme) =>
//           theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//       }}
//     >
      
//       <Grid container spacing={2}>
//         <Grid item>
          
//             <img alt="icon" src={process.env.PUBLIC_URL +(role=="user"?'/person_icon.png':'/agent_icon.png')} />
          
//         </Grid>
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography gutterBottom variant="subtitle1" component="div">
//                 Standard license
//               </Typography>
//               <Typography variant="body2" gutterBottom>
//                 Full resolution 1920x1080 • JPEG
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 ID: 1030114
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                 Remove
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <Typography variant="subtitle1" component="div">
//               $19.00
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }
