import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""});

    const handleClick = (event) => {
        event.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Note Added Successfully", 'success');
    }


    const onChange = (event) => {

        setNote({...note, [event.target.name]: event.target.value});
    }

    return (
        <div className="container my-3">
            <div>
                <h2 style={{fontWeight:'700',textAlign:'center', color:'white'}}>Add a note!</h2>
                <hr style={{width:'20%',margin:'auto', marginBottom:'14rem'}}></hr>
                <form className="my-3 addNote-form">
                    <div className="mb-3">
                        {/* <label htmlFor="title" className="form-label">Title : </label> */}
                        <input type="text" placeholder="Enter your title" onChange={onChange} id="title" name="title" aria-describedby="emailHelp" value={note.title} minLength={5} required/>
                    </div>
                    <div className="mb-3" style={{marginTop:'2rem'}}>
                        {/* <label htmlFor="description" className="form-label">Description : </label> */}
                        <input type="text" placeholder="Enter your description" onChange={onChange} id="description" name="description" value={note.description} minLength={5} required/>
                    </div>
                    <div className="mb-3" style={{marginTop:'2rem'}}>
                        {/* <label htmlFor="tag" className="form-label">Tag : </label> */}
                        <input type="text" placeholder="Enter your tag" onChange={onChange} id="tag" name="tag" value={note.tag} minLength={5} required/>
                    </div>
                    <button style={{marginTop:'1rem', background:'linear-gradient(to bottom right, rgb(255, 131, 152),rgb(160, 34, 209))', border:'none'}} disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>

        </div>
    )
}

export default AddNote;
