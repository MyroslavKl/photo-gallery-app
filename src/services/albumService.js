import axios from 'axios';

export const getAllAlbums = () => {
    return axios.get('/api/album');
};

export const getMyAlbums = () => {
    return axios.get('/api/album/my-albums', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const createAlbum = (album) => {
    return axios.post('/api/album', album, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const deleteAlbum = (albumId) => {
    return axios.delete(`/api/album/${albumId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};
