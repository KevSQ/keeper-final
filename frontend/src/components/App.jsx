import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/notes`);
                const data = await response.json();
                setNotes(data);
            } catch (err) {
                console.error('Error fetching notes:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotes();
    }, []);

    const addNote = async () => {
        if (newNote.title.trim() && newNote.content.trim()) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/notes`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newNote)
                });
                const data = await response.json();
                setNotes(prevNotes => [...prevNotes, { ...newNote, _id: data._id }]);
                setNewNote({ title: '', content: '' });
            } catch (err) {
                console.error('Error adding note:', err);
            }
        }
    };

    const deleteNote = async id => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/notes/${id}`, { method: 'DELETE' });
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
        } catch (err) {
            console.error('Error deleting note:', err);
        }
    };

    const handleInputChange = ({ target: { name, value } }) => {
        setNewNote(prevNote => ({ ...prevNote, [name]: value }));
    };

    return (
        <div>
            <Header />
            <div className="container">
                {isLoading ? <p>Loading...</p> : notes.map(note => (
                    <Note key={note._id} id={note._id} onDelete={deleteNote} {...note} />
                ))}
            </div>
            <div className="add-note-form">
                <input type="text" name="title" placeholder="Title" value={newNote.title} onChange={handleInputChange} />
                <textarea name="content" placeholder="Content" value={newNote.content} onChange={handleInputChange} />
                <button onClick={addNote}>Add Note</button>
            </div>
            <Footer />
        </div>
    );
};

export default App;
