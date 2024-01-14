const Note = require('../../db/models/note');

module.exports = {
	saveNote(req, res) {
		const newNote = new Note({ title: 'Korczak wiecznie żywy', body: 'Biografia tego żydka' });
		newNote.save().then(() => {
			console.log('Notatka została zapisana');
		});

		res.send('Strona główna działa bardzo dobrze!');
	},
};
