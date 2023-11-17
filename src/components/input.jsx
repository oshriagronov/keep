import React from "react";
import PropTypes from 'prop-types'

function Input(props){
    const {onAdd} = props;
    const [inputNote, setInputNote] = React.useState({
        title: "",
        content: ""
    });
    function handleChange(event){
        const {name, value} = event.target;
        setInputNote(prev => ({...prev, [name]: value}));
    }

  return(
        <div className="input-box">
            <textarea onChange={handleChange} name="title" value={inputNote.title} rows="1" cols="50" placeholder="Title"></textarea>
            <br></br>
            <textarea onChange={handleChange} name="content" value={inputNote.content} rows="7" cols="50" placeholder="What's on your mind?"></textarea>
            <button id="add-button" onClick={() => {
                onAdd(inputNote)
                setInputNote({title: "", content: ""});
                }}
            >+</button>
        </div>
    );
}

export default Input

Input.propTypes = {
    onAdd: PropTypes.func
  }