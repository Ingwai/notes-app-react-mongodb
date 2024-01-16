import PropTypes from 'prop-types';
import { useState } from 'react';

const Note = ({ title, body, _id, onDelete, onEdit }) => {
	const [showDescription, setShowDescription] = useState(false);

	const toggleDescription = () => {
		setShowDescription(prevState => !prevState);
	};

	const editHandler = () => {
		onEdit({ title, body, _id });
	};

	return (
		<div className='note'>
			<p onClick={toggleDescription}>{title}</p>

			{showDescription && <div className='description'>{body}</div>}
			<button onClick={editHandler}>Edit</button>
			<button className='delete' onClick={() => onDelete(_id)}>
				Delete
			</button>
		</div>
	);
};

export default Note;

Note.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func,
};
