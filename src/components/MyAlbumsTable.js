import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyAlbumsTable = () => {
    const [albums, setAlbums] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newAlbumTitle, setNewAlbumTitle] = useState('');

    useEffect(() => {
        const fetchMyAlbums = async () => {
            const response = await axios.get('/api/album/my-albums', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setAlbums(response.data);
        };
        fetchMyAlbums();
    }, []);

    const handleCreateAlbum = async () => {
        const newAlbum = { title: newAlbumTitle };
        await axios.post('/api/album', newAlbum, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setShowForm(false);
        setNewAlbumTitle('');
        const response = await axios.get('/api/album/my-albums', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setAlbums(response.data);
    };

    const handleDelete = async (albumId) => {
        await axios.delete(`/api/album/${albumId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setAlbums(albums.filter(album => album.albumId !== albumId));
    };

    return (
        <div>
            <h2>My Albums</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album.albumId}>
                            <td>{album.title}</td>
                            <td>
                                <button onClick={() => handleDelete(album.albumId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setShowForm(true)}>Create New Album</button>

            {showForm && (
                <div>
                    <h3>Create New Album</h3>
                    <input
                        type="text"
                        value={newAlbumTitle}
                        onChange={(e) => setNewAlbumTitle(e.target.value)}
                        placeholder="Album Title"
                    />
                    <button onClick={handleCreateAlbum}>Create</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default MyAlbumsTable;

