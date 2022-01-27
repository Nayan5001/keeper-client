import React, { useState,Component, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
// import FormData from "FormData";
// import * as mongoose from "mongoose";
function App() {
    // const mongoose = require("mongoose");
    // mongoose.connect("mongodb://localhost:27017/keeperdb",{useNewUrlParser:true,useUnifiedTopology:true});
    const [notes, setNotes] = useState([]);
    // const [idd,setid]=useState();
    
    useEffect(()=>{
      axios.get('http://localhost:3000/api').then((response)=>{
        console.log(response.data);
        setNotes(response.data);
      });
    },[]);
  
    // var bodyFormData = new FormData();
  function addNote(newNote) {
    console.log(newNote);
    axios.post('http://localhost:3000/apiadd',{newNote})
    .then(function (response) {
      //handle success
      console.log(response);
      // setid(id+1);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    // let id=0;
    // notes.forEach(()=>{
    //   id++;
    // });
    
    
  }

  function deleteNote(id) {
    
   
    // axios.get('http://localhost:3000/getid').then((response)=>{
    //   console.log(response.data);
    //   setid(response.data);
    // });
    axios.post('http://localhost:3000/apidel',{id})
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/api',
      //   data: {
      //     firstName: 'Finn',
      //     lastName: 'Williams'
      //   }
      // }).then((response) => {
      //   console.log(response);
      // }, (error) => {
      //   console.log(error);
      // });
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return noteItem.id !== id;
        });
      
      });
      console.log(id);
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
