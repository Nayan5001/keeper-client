import React, { useState,useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";
function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const[idd,setid]=useState(0);
  const [ spinner, setSpinner ] = useState(true);
  useEffect(()=>{
    axios.get('/getid').then((response)=>{
      console.log(response.data.idd);
      // let num=(response.data);
      setid(response.data.idd);
      // console.log(idd);
    });
    setSpinner(false);
  },[]);
  const [note, setNote] = useState({
    title: "",
    content: "",
    id:idd
  });
  // console.log("note_id");
  // console.log(note.id);
  // window.addEventListener('keydown', function(event) {
  //   //set default value for variable that will hold the status of keypress
  //   let pressedEnter = false;

  //   //if user pressed enter, set the variable to true
  //   if (event.keyCode == 13)
  //     pressedEnter = true;

  //   //we want forms to disable submit for a tenth of a second only
  //   setTimeout(function() {
  //     pressedEnter = false;
  //   }, 100)

  // })

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
    axios.post('/savenextid',{idd})
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
  return (!spinner && 
    <div>
      <form className="create-note" onSubmit={submitNote}>
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
