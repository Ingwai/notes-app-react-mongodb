const Note = require('../../db/models/note');

class NoteActions {
	async getAllNotes(req, res) {
		let doc;
		try {
			doc = await Note.find({});
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: error.message });
		}
		res.status(200).send(doc);
	}

	async getNote(req, res) {
		let note;
		const id = req.params.id;
		try {
			note = await Note.findOne({ _id: id });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: error.message });
		}
		res.status(200).send(note);
	}

	async saveNote(req, res) {
		let note;
		const title = req.body.title;
		const body = req.body.body;

		try {
			note = new Note({ title, body });
			await note.save();
		} catch (error) {
			console.log(error);
			return res.status(422).json({ message: error.message });
		}

		res.status(201).json(note);
	}

	async updateNote(req, res) {
		let note;
		const title = req.body.title;
		const body = req.body.body;
		const id = req.params.id;
		try {
			note = await Note.findOneAndUpdate({ _id: id }, { title: title, body: body });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: error.message });
		}
		res.status(201).json(note);
	}

	async deleteNote(req, res) {
		const id = req.params.id;
		try {
			await Note.findOneAndDelete({ _id: id });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: error.message });
		}
		res.sendStatus(204);
	}
}

module.exports = new NoteActions();
