import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AlbumsTable from './components/AlbumsTable';
import MyAlbumsTable from './components/MyAlbumsTable';
import AlbumView from './components/AlbumView';

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/albums" component={AlbumsTable} />
            <Route path="/my-albums" component={MyAlbumsTable} />
            <Route path="/album/:id" component={AlbumView} />
        </Routes>
    </Router>
);

export default App;






