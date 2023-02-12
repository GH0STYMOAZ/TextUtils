import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // console.log('Upper Case Was Clicked' + text);
    setText(newText)
    props.showAlert("Converted to Upper Case!","success");
  }

  const handleloClick = () => {
    let newText = text.toLowerCase();
    // console.log('Upper Case Was Clicked' + text);
    setText(newText)
    props.showAlert("Converted to Lower Case!","success");
  }

  const toCapCase = () => {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    // console.log('Upper Case Was Clicked' + text);
    setText(newText)
    props.showAlert("Converted to Capitalize Case!","success");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Te Text!","success");
  }

  const handleExSp = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed The Extra Spaces","success");
  }

  const handleClearClick = () => {
    let newText = '';
    // console.log('Upper Case Was Clicked' + text);
    setText(newText)
    props.showAlert("Clear The Text!","success");
  }

  const handleOnChange = (event) => {
    console.log('On Change');
    setText(event.target.value)
  }
  
  const [text, setText] = useState('Enter text Here');
  
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="9" style={{background:props.mode === 'dark' ? '#042743' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
        </div>

        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Upper Case</button>
        <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert To Lower Case</button>
        <button className='btn btn-primary mx-2' onClick={toCapCase}>Capitalize Word</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExSp}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className='container my-4' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>You Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Charachters</p>
        <p>{0.008 * text.split(" ").length} Minutes Reading</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The Text Box Above To Preview it Here"}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Heading Name'
}

