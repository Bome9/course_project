import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';

const App = () => {

    const [posts, setPosts] = useState([
        {id:1, title: "JavaScript", body: "JavaScript - язык программирования."},
        {id:2, title: "JavaScript 2", body: "JavaScript - язык программирования."},
        {id:3, title: "JavaScript 3", body: "JavaScript - язык программирования."}
    ])

    const [posts2, setPosts2] = useState([
        {id:1, title: "Python", body: "Python - язык программирования."},
        {id:2, title: "Python 2", body: "Python - язык программирования."},
        {id:3, title: "Python 3", body: "Python - язык программирования."}
    ])

    return (

        <div className='App'>
            <PostList posts={posts} title = 'Посты про JS'/>
            <PostList posts={posts2} title = 'Посты про Python'/>
        </div>
    );
};

export default App;
