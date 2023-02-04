import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const { note, updateNote } = props;

  const context = useContext(noteContext);
  const { deleteNote } = context;


  return (
    <div className="col-md-3">
      <div className="card my-3" style={{backgroundColor: "rgba(255,255,255,0.13)", border: "2px solid rgba(255,255,255,0.1)"}}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title" style={{color:"white"}}>{note.title}</h5>
          </div>
          <p className="card-text" style={{color:'white'}}>{note.description}</p>
        </div>
        <div className="icons" style={{marginLeft:'0.5rem',marginBottom:'0.5rem'}}>
              <i style={{color:"white"}} className="far fa-trash-alt mx-2" onClick={() => {deleteNote(note._id); props.showAlert("Note Deleted Successfully.", 'success')}}></i>
              <i style={{color:"white"}} className="far fa-edit mx-2" onClick={() => {updateNote(note)}}></i>
            </div>
      </div>
    </div>
  );
};

export default Noteitem;
