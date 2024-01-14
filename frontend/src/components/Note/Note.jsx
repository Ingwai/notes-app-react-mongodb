import PropTypes from 'prop-types';

const Note = ({ title, body }) => {
	return (
		<div className='note'>
			<p>{title}</p>
			<div className='description'>{body}</div>
			<button>Edit</button>
			<button className='delete'>Delete</button>
		</div>
	);
};

export default Note;

Note.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};
