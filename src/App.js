import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';

const App = () => {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response)
        setPosts(response.data)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (

        <div className='App'>

            <MyButton style={{ marginTop: 30}} onClick={fetchPosts}>Получить посты</MyButton>

            <MyButton style={{ marginTop: 30}} onClick={() => setModal(true)} >
                Создать пост
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} />

            <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Посты про JS' />


        </div>
    );
};

export default App;
