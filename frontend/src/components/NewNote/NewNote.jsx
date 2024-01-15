import PropTypes from 'prop-types';
import { useState } from 'react';

const NewNote = ({ onAdd }) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addNote = () => {
		if (title.trim() === '' || body.trim() === '') return;

		const note = {
			title: title,
			body: body,
		};
		onAdd(note);
		setTitle('');
		setBody('');
	};

	return (
		<div className='note'>
			<label>Title:</label>
			<input type='text' value={title} onChange={e => setTitle(e.target.value)} />
			<br />
			<label>Description:</label>
			<textarea rows='3' type='text' value={body} onChange={e => setBody(e.target.value)} />
			<button onClick={() => addNote()}>Add note</button>
		</div>
	);
};

export default NewNote;

NewNote.propTypes = {
	onAdd: PropTypes.func,
};
