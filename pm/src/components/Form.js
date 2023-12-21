import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState("");
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
    }
    const handleSpaceClick=()=>{
        let newText=text.trim();
        setText(newText)
    }
    // Alternative Method 
    // const handleTitleClick=()=>{
    //     let newText=text.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
    //     setText(newText);
    // }
    const handleTitleClick=()=>{
        const prepositions = ["a", "and", "in", "on", "at", "to", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "from", "up", "down", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "of"];
        let words=text.split(' ');
        let newText=words.map((word,index) => {
            if (index===0 || !prepositions.includes(word.toLowerCase())){
                return word.charAt(0).toUpperCase()+word.substr(1).toLowerCase();
            }
            else{
                return word.toLowerCase();
            }
        }).join(' ');
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-primary my-3 mx-3' onClick={handleUpClick}>Uppercase</button>
                <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Lowercase</button>
                <button className='btn btn-primary my-3 mx-3' onClick={handleClearClick}>Clear</button>
                <button className='btn btn-primary my-3 mx-3' onClick={handleSpaceClick}>Remove Spaces from Both Sides</button>
                <button className='btn btn-primary my-3 mx-3' onClick={handleTitleClick}>Title Case</button>
            </div>
        </div>
        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>

        </div>
        </>
    )
}
