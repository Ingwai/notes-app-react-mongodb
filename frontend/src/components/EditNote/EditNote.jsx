import { useState } from 'react';
import PropTypes from 'prop-types';

const EditNote = ({ onEdit, titleEdit, bodyEdit, idEdit, toggleModal }) => {
	const [title, setTitle] = useState(titleEdit);
	const [body, setBody] = useState(bodyEdit);

	const editNote = () => {
		if (title.trim() === '' || body.trim() === '') return;

		const note = {
			title,
			body,
			_id: idEdit,
		};
		onEdit(note);
	};

	return (
		<>
			<div className='note'>
				<label>Title:</label>
				<input type='text' value={title} onChange={e => setTitle(e.target.value)} />
				<br />
				<label>Description:</label>
				<textarea rows='3' type='text' value={body} onChange={e => setBody(e.target.value)} />
				<button onClick={() => editNote()}>Save note</button>
				<button className='btn-modal' onClick={() => toggleModal()}>
					Cancel
				</button>
			</div>
		</>
	);
};

export default EditNote;

EditNote.propTypes = {
	onEdit: PropTypes.func,
	toggleModal: PropTypes.func,
	titleEdit: PropTypes.string,
	bodyEdit: PropTypes.string,
	idEdit: PropTypes.string,
};
