const notesCtrl = {};

const Note = require('../models/Note');


notesCtrl.renderNotesForm = (req, res )=>{
   res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res)=>{
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    await newNote.save();
    res.redirect('/notes') // cambiar res.send("note")
};

notesCtrl.renderNotes = async (req, res)=>{
    //find sirve para busacr todos los datos que estan en una colecion
   const notes = await Note.find();
   res.send('notes/all-notes',{ note });
}; 

notesCtrl.renderEditForm = async (req, res)=>{
    //res.send('render edit form')
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note',{ note });
};

notesCtrl.updateNotes = async(req, res)=>{
    //destructurin de js 
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id,{title,description});
    //res.send('update notes')
    res.redirect('/notes');
}

notesCtrl.deleteNote = async (req, res)=>{
    //console.log(req.params.id) obtener el id y saber si lo tenemos 
    //res.send('deleting note') manda solamente el mensaje 
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes')
}

module.exports = notesCtrl;