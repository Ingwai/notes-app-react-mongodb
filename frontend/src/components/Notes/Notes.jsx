import Note from '../Note/Note';
import './Notes.css';

const Notes = () => {
	const notes = [
		{
			id: 2323,
			title: 'Wykąpać psa',
			body: 'pamietaj aby coś zrobić',
		},
		{
			id: 3456,
			title: 'Zrobić zakupy',
			body: 'Kupić mleko, jabłka, ziemniaki',
		},
	];

	return (
		<main>
			<p>Moje notatki:</p>
			{notes.map(note => {
				return <Note key={note.id} {...note} />;
			})}
		</main>
	);
};

export default Notes;
