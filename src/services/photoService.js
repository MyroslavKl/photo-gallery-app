import axios from 'axios';

export const getPhotosByAlbum = (albumId) => {
    return axios.get(`/api/photo/album/${albumId}`);
};

export const addPhoto = (photo) => {
    return axios.post('/api/photo', photo, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const likePhoto = (photoId) => {
    return axios.post(`/api/photo/${photoId}/like`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const dislikePhoto = (photoId) => {
    return axios.post(`/api/photo/${photoId}/dislike`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const deletePhoto = (photoId) => {
    return axios.delete(`/api/photo/${photoId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};
