import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));
app.use(express.json());
mongoose.connect("mongodb+srv://km3628:moCqwo7QKflTF4EL@keeper.hnvvukx.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));
const Note = mongoose.model('Note', new mongoose.Schema({ title: String, content: String}));

async function startServer(port) {
    try {
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (error) {
        console.error('Error starting server:', error);
    }
}
app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find({});
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post('/notes', async (req, res) => {
    try {
        const newNote = new Note(req.body);
        await newNote.save();
        res.json({ message: 'Successfully added a new note.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete('/notes/:id', async (req, res) => {
    try {
        await Note.findOneAndDelete({ _id: req.params.id });
        res.send('Note deleted successfully.');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Heroku assigns port so check process environment or use 80
const startPort = process.env.PORT || 80;
startServer(startPort).then(r => console.log('Server started successfully.'));
