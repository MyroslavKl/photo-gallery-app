import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const AlbumsTable = () => {
    const [albums, setAlbums] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await axios.get('/api/album', {
                params: { page: page, pageSize: 5 } // Assuming the backend supports pagination
            });
            setAlbums(response.data.albums); // Assuming response has 'albums' array and 'totalPages'
            setTotalPages(response.data.totalPages);
        };
        fetchAlbums();
    }, [page]);

    return (
        <div>
            <h2>Albums</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album.albumId}>
                            <td><img src={album.photos[0]?.thumbnailUrl} alt="cover" /></td>
                            <td>{album.title}</td>
                            <td>
                                <Link to={`/album/${album.albumId}`}>View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
};

export default AlbumsTable;
