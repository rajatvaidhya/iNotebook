import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
import {useHistory} from 'react-router-dom'

const Notes = (props) => {
  const context = useContext(noteContext);
  let history = useHistory();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes();
    }
    else
    {
      history.push('/login');
    }
    //eslint-disable-next-line
  }, [])

  const updateNote = (currentNote) => {

    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });

  }

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });


  const handleClick = (event) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note Updated Successfully", 'success');
  }


  const onChange = (event) => {

    setNote({ ...note, [event.target.name]: event.target.value });
  }

  return (
    <>
      <AddNote showAlert={props.showAlert}/>



      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-form">
          <div className="modal-content modal-form">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" style={{color:'white'}}>Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label" style={{color:'white'}}>Title</label>
                  <input type="text" style={{color:"white", outline:'none', border: '2px solid rgba(255,255,255,0.1)'}} onChange={onChange} id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label" style={{color:'white'}}>Description</label>
                  <input type="text" style={{color:"white", outline:'none', border: '2px solid rgba(255,255,255,0.1)'}} onChange={onChange} id="edescription" value={note.edescription} name="edescription" minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label" style={{color:'white'}}>Tag</label>
                  <input type="text" style={{color:"white", outline:'none', border: '2px solid rgba(255,255,255,0.1)'}} onChange={onChange} id="etag" value={note.etag} name="etag" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className="row" style={{marginTop:'-10rem'}}>
        <h2 className="my-3" style={{textAlign:"center", fontWeight:'700', color:'white'}}>Your notes</h2>
        <hr style={{width:'20%',margin:'auto', display:'absolute'}}></hr>
        <div className="container" style={{marginTop:'2rem'}}>
          {notes.length===0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
        })}
      </div>

      <div style={{textAlign:'center', fontSize:'12px', marginTop:'2rem'}}>
        <p style={{color:'white'}}>Made with 💖 by Rajat Vaidhya</p>
      </div>
    </>
  );
};
export default Notes;
