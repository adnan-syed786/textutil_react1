import React, { useState } from 'react'


export default function About(props) {

//   const [myStyle,setMyStyle]=useState(
//    {
//       color:'white',
//       backgroundColor: 'black'
//    })
  let myStyle={
   color: props.mode ==='dark'?'white':'#042743',
   backgroundColor: props.mode ==='dark'?'rgb(34 74 104)':'white'
  }
  
  const [btnText,setBtnText]=useState(" Enable Dark Mode")

//    const toggleStyle=()=>{
//         if( myStyle.color==='white'){
//           setMyStyle({
//             color:'black',
//             backgroundColor: 'white',
//             border:'1px solid white'
//           })
//           setBtnText("enable dark mode")
//         }
//       else
//       {
//          setMyStyle({
//             color:'white',
//             backgroundColor: 'black'
//           })
//           setBtnText("enable light mode")
//       }
//   }
  
   return (
    <div className="container my-3" style={myStyle}>
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionExample">
      {/* first description */}
         <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
               <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text</strong>
               </button>
            </h2>
         <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
               <div className="accordion-body" style={myStyle}>
               In the textutils website we covert the text into uppercase ,lowercase and word count
               </div>
         </div>
         </div>

         {/* second description */}
         <div className="accordion-item">
            <h2 className="accordion-header">
               <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free to use</strong>
               </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
               <div className="accordion-body" style={myStyle}>
               Textutils is free to use counter app and in this app or website in this we calculate no of word or characters in these.
               </div>
            </div>
         </div>

         {/* third description */}
         <div className="accordion-item">
            <h2 className="accordion-header">
               <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser compatible</strong>
               </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
               <div className="accordion-body" style={myStyle}>
               Every device capible for this.
               </div>
            </div>
         </div>
     </div>

     {/* enable dark mode example  */}
     {/* <div className="container my-3">
      <button  onClick={toggleStyle}type="button" className="btn btn-primary">{btnText}</button>
     </div> */}
  </div>
  )
}
