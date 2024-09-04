import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api.get('/albums')
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error('Error fetching albums:', error));
  }, []);

  return (
    <div className="albums-container">
      <h2>Albums</h2>
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

export default Albums;
