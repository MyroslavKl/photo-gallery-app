import React, { useEffect, useState, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const MyAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/albums/my')
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error('Error fetching my albums:', error));
  }, [user]);

  return (
    <div className="my-albums-container">
      <h2>My Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.albumId}>
            {album.title} - {album.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAlbums;
