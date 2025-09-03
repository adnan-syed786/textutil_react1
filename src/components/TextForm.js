import React,{useState}from 'react';
//use the concept of props
export default function TextForm(props) {

   const[text,setText]=useState("")

  const handleUpClick=()=>
  {
   console.log("upperCase  was clicked");
   //convert uppercase
   let newText=text.toUpperCase()

   //wrong way hain change the state 
   //text="new text"

   //update text to new text 
   setText(newText)
   props.showAlert("Converted to upperCase","success")
  }

  const handleLoClick=()=>
  {
   console.log("LowerCase  was clicked");
   //convert Lowercase
   let newText=text.toLowerCase()
   setText(newText)
   props.showAlert("Converted to lowerCase","success")
  }

  const handleClearClick=()=>
  {
   console.log("clear text  was clicked");
   //clear 
   let newText=""
   setText(newText)
   props.showAlert("Text was cleared","success")
  }

  const handleCopy=()=>
  {
    console.log("clear text")
    var text=document.getElementById("Mybox")
    text.select()
    navigator.clipboard.writeText(text.value) 
    props.showAlert("Text copied","success")
  }

  //handle event  
   const handleOnChange=(event)=>
   {
      console.log("on Change")
      setText(event.target.value)
   }  
   //main function of text from there 
  return (
    <> 
    <div className="container" style={{color: props.mode ==='dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark' ? '#13466e':'white',color: props.mode ==='dark' ? 'white':'black'}} id="Mybox" rows="8"></textarea>
      </div>
      {/* crete a button to display */}
      <button disabled ={text.length===0} type="button" className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Convert to UpperCase </button>

      <button disabled ={text.length===0} type="button" className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>Convert to LowerCase </button>

      <button disabled ={text.length===0} type="button" className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear Text </button>

      <button disabled ={text.length===0} type="button" className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text </button>
    </div>


    {/* for text summary of above text */}
    <div className="container my-3" 
    style={{color: props.mode ==='dark' ? 'white':'black'}}>
     <h2>Your text summary</h2>
      <p>
        <b>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</b>
      </p>

      {/* time to read the above text */}
      <p>
        {(0.08 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)).toFixed(2)} Minutes
      </p>

      {/* Preview */}
      <h2>Preview</h2>
      <p>
        {text.length > 0? text: "Nothing to preview"}
      </p>
    </div>
    </>
  )
}