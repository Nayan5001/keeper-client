import React, { useState,useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";
function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const[idd,setid]=useState(0);
  useEffect(()=>{
    axios.get('http://localhost:3000/getid').then((response)=>{
      console.log(response.data.idd);
      // let num=(response.data);
      setid(response.data.idd);
      // console.log(idd);
    });
  },[idd]);
  const [note, setNote] = useState({
    title: "",
    content: "",
    id:idd
  });
  // console.log("note_id");
  // console.log(note.id);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        id:idd
      };
    });
    // idd=idd+1;
  }

  function submitNote(event) {
    
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      id:''
    });
    setid(idd+1);
    axios.post('http://localhost:3000/savenextid',{idd})
    .then(function (response) {
      //handle success
      console.log(response);
      // setid(id+1);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }
  const enabled =
  note.title.length > 0;
  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            required
          />
        ) : (
          ""
        )}
        {isExpanded ? (
          <textarea
            name="content"
            onClick={expand}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
        ) : (
          <textarea
            name="content"
            onClick={expand}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="1"
          />
        )}
        {isExpanded ? (
          <Zoom in={true}>
            <Fab disabled={!enabled} onClick={submitNote}>
              <AddCircleIcon />
            </Fab>
          </Zoom>
        ) : (
          <Zoom in={false}>
            <Fab disabled={!enabled} onClick={submitNote}>
              <AddCircleIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
