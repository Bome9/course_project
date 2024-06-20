import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

const App = () => {

    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "JavaScript - язык программирования." },
        { id: 2, title: "JavaScript 2", body: "JavaScript - язык программирования." },
        { id: 3, title: "JavaScript 3", body: "JavaScript - язык программирования." }
    ])
    const [post, setPost] = useState({ title: '', body: '' })


    const addNewPost = (e) => {
        e.preventDefault()

        setPosts([...posts, {...post, id: Date.now()}])
        setPost({ title: '', body: '' })
    }

    return (

        <div className='App'>
            <form>
                {/* Управляемые компоненты */}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    placeholder='Название поста'
                    type='text'
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder='Описание поста'
                    type='text'
                />
                <MyButton onClick={addNewPost} >Добавить</MyButton>
            </form>
            <PostList posts={posts} title='Посты про JS' />
        </div>
    );
};

export default App;
