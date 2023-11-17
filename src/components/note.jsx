import React from 'react';
import PropTypes from 'prop-types'

function Note(props){
    const {id, onDelete, title, content} = props;
    function showDelete(event){
        document.getElementById(`delete-button${id}`).hidden = false;
    }

    function hideDelete(){
        document.getElementById(`delete-button${id}`).hidden = true;
    }
    return(
        <div className="note" onMouseOver={showDelete} onMouseOut={hideDelete}>
            <button hidden={true} className="delete-button" id={`delete-button${id}`} onClick={() => {
                onDelete(id);
                }
                } >-</button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};
export default Note;

Note.propTypes = {
    id: PropTypes.number,
    onDelete: PropTypes.func,
    title: PropTypes.string,
    content: PropTypes.string 
  }