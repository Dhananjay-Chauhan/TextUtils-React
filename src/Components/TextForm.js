import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState("Enter the Text Here <*-*>");
  // below hooks is used : must be used inside function : value in useState("Enter the Text Here <*-*>") is the default value which belongs to text , on updating setText Function is used.
  // imp syntax :: can't update text like - text="dciudbcis"; because its a state . for updation setText() can be used only like setText("ebfiwfbisfbi")
  const handleUpEvent =()=>{
    console.log("up was clicked");
    let sText=text.toUpperCase();
    setText(sText);
    props.showAlert("Converted to UpperCase","success")
  }
  const handleDownEvent =()=>{
    console.log("up was clicked");
    let sText=text.toLowerCase();
    setText(sText);
    props.showAlert("Converted to LowerCase","success")
  }
  const handleOnChange =(event)=>{
    console.log("ONchecnga clicked");
    setText(event.target.value );
  }
  const handleClrEvent =(event)=>{
    console.log("clr clicked");
    setText(" ");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
// javascript regexes used
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            <button className='btn btn-primary my-2' onClick={handleUpEvent}>Convert to UpperCase</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleDownEvent}>Convert to LowerCase</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleClrEvent}>Clear Text</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleCopy }>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
    </div>
    <div className="container">
      <h1>Your Text Summary :</h1>
      <p>Words : {text.split(" ").length} </p>
      <p>Characters : {text.length} </p>
      <h1>Preview :</h1>
      <p>{text.length>0?text:"Enter something to preview 😃"}</p>
    </div>
    </>
  )
}

TextForm.PropType={
  heading: PropTypes.string
}
TextForm.defaultProps={
  heading:" Enter here :"
}
