

  const fs = require('fs');


  var fetchNotes = () =>{
    try {
      var notesString = fs.readFileSync('notes-data.json');
      return JSON.parse(notesString);
    } catch (e) {
      return [];
    }
  };

  var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  };

  var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
      title,
      body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note;
    }
  };


  var getAll = () => {
    return fetchNotes();
  };


  var getNote = (title) =>{
    var getSpecNote = fetchNotes();
    var specTitle = getSpecNote.filter((note) => note.title === title);
    return specTitle;
  };

  var removeNote = (title) =>{
    var dataFetch = fetchNotes(); //getting data from the file
    var dupTitle = dataFetch.filter((note) => note.title !== title );
    saveNotes(dupTitle);
    return dataFetch.length !== dupTitle.length;
    };
  //console.log(dataFetch[0].title);

  module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
  }
