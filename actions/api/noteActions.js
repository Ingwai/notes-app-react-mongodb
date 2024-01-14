const Note = require('../../db/models/note');

class NoteActions {
	saveNote(req, res) {
		// const newNote = new Note({ title: 'Korczak wiecznie żywy', body: 'Biografia tego żydka' });
		// newNote.save().then(() => {
		// 	console.log('Notatka została zapisana');
		// });

		const title = req.body.title;
		const body = req.body.body;
		res.send('Notatka została stworzona!' + title + ' ' + body);
	}

	getAllNotes(req, res) {
		res.send('API działa');
	}

	getNote(req, res) {
		res.send('Info o notatce');
	}

	updateNote(req, res) {
		res.send('update notatki..');
	}

	deleteNote(req, res) {
		const id = req.params.id;
		res.send('wykasuj notatkę. ID' + id);
	}
}

module.exports = new NoteActions();
