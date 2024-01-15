import { useEffect, useState } from 'react';
import Note from '../Note/Note';
import './Notes.css';
import NewNote from '../NewNote/NewNote';
import Modal from 'react-modal';
import EditNote from '../EditNote/EditNote';
import axios from '../../axios';

const notes = [];

const Notes = () => {
	const [userNotes, setUserNotes] = useState(notes);
	const [showForm, setShowForm] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [editingNote, setEditingNote] = useState({});

	useEffect(() => {
		const fetchNotes = async () => {
			const response = await axios.get('/notes');
			const notes = await response.data;
			console.log(notes);
			setUserNotes(notes);
		};
		fetchNotes();
	}, []);

	const addNote = async note => {
		// add to backend
		try {
			await axios.post('/notes', note);
			const res = await axios.get('/notes');
			const newNote = await res.data;
			// add to frontend
			setUserNotes(newNote);
		} catch (err) {
			console.log(err);
		}

		setShowForm(false);
	};

	const deleteNote = async _id => {
		setUserNotes(userNotes.filter(note => note._id !== _id));
		await axios.delete(`/notes/${_id}`);
	};

	const editNote = async note => {
		// edit backend
		await axios.put(`/notes/${note._id}`, note);
		// edit fronend
		const index = userNotes.findIndex(item => item._id === note._id);
		if (index >= 0) {
			userNotes[index] = note;
		}
		setEditingNote(note);
		toggleModal();
	};

	const toggleModal = () => {
		setShowEditModal(!showEditModal);
	};

	const editNoteHandler = note => {
		toggleModal();
		setEditingNote(note);
	};

	return (
		<main>
			<p>Moje notatki:</p>

			<button onClick={() => setShowForm(!showForm)}>New note</button>
			{showForm && <NewNote onAdd={note => addNote(note)} />}
			<Modal
				isOpen={showEditModal}
				contentLabel='Edit note'
				ariaHideApp={false}
				appElement={document.getElementById('root')}
				style={{
					content: {
						width: '50rem',
						height: '85vh',
						margin: 'auto',
						padding: '0px',
						border: 'none',
						overflow: 'hidden',
					},
				}}>
				<EditNote
					onEdit={note => editNote(note)}
					titleEdit={editingNote.title}
					bodyEdit={editingNote.body}
					idEdit={editingNote._id}
					toggleModal={toggleModal}
				/>
			</Modal>
			{userNotes.map(note => {
				return (
					<Note key={note._id} {...note} onDelete={_id => deleteNote(_id)} onEdit={note => editNoteHandler(note)} />
				);
			})}
		</main>
	);
};

export default Notes;
