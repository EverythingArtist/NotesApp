  const fs = require('fs');
  const _ = require('lodash');
  const yargs = require('yargs');
  const notes = require('./notes.js');
  const titleOptions = {
  describe: 'title of the note',
  demand: true,
  alias: 't'
};

  var argv = yargs.command('add', 'add a note',{
    title:titleOptions,
    body:{
      body: 'body of the note',
      demand: true,
      alias: 'b'
    },
  })
  .command('list', 'list all notes')
  .command('read', 'read a note',{
    title:titleOptions,
  })
  .command('remove', 'remove a note',{
    title:titleOptions,
  }).help().argv;
  var command = argv._[0];


  if(command === 'add'){
      var note = notes.addNote(argv.title, argv.body);
  if (note){
    debugger;
  console.log("note added");
  }else{
      console.log("cannot print same note");
  }


  }else if (command === 'list'){
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) =>console.log(note));


  }else if (command === 'read'){
    var specNote = notes.getNote(argv.title);
    if (specNote.length){
      console.log('note found ! :' );
      console.log(specNote);
    }else{
       console.log("cannot read note");
    }


  } else if(command === "remove"){
  var soHint =   notes.removeNote(argv.title);
  var message = soHint ? 'note was removed' : 'note not found';
  console.log(message);
  }else{
    console.log('command not recognized');
  }
