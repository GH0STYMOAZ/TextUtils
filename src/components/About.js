import React, {useState} from 'react'

export default function About() {

    const [myStyle,setMyStyle] = useState({
        color : '#042743',
        backgroundColor : 'white'
    },)

    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === '#042743'){
            setMyStyle({
                color : 'white',
                backgroundColor : '#042743',
                border : '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }else{
            setMyStyle({
                color : '#042743',
                backgroundColor : 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <div className='container my-4' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Living
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Education
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Skills
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
    </div>

    <div className="container my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary ">{btntext}</button>
    </div>
  </div>
  )
}
