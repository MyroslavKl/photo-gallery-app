import React, { useState } from 'react';
import axios from 'axios';

const LikeDislikeButtons = ({ photoId }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = async () => {
        await axios.post(`/api/photo/${photoId}/like`, {}, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setLikes(likes + 1);
    };

    const handleDislike = async () => {
        await axios.post(`/api/photo/${photoId}/dislike`, {}, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setDislikes(dislikes + 1);
    };

    return (
        <div>
            <button onClick={handleLike}>Like {likes}</button>
            <button onClick={handleDislike}>Dislike {dislikes}</button>
        </div>
    );
};

export default LikeDislikeButtons;
