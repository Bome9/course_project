import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

const App = () => {


    const [posts, setPosts] = useState([
        { id: 1, title: "Apple", body: "Hello." },
        { id: 2, title: "JBox", body: "Sex" },
        { id: 3, title: "Pussy", body: "Fucker" }
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const sortedPosts = useMemo(() => {
        console.log('Функция сорт отработала')
        if (selectedSort) {
            return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))]
        }
        return posts;
    }, [selectedSort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts] )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (

        <div className='App'>
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <div>
                <MyInput
                    placeholder="Поиск по названию"
                    vlaue={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по:"
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По содержанию' }
                    ]}
                />
            </div>

            {sortedAndSearchedPosts.length
                ?
                <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Посты про JS' />
                :
                <h1 style={{ textAlign: "center", color: "orange" }} >   Посты отсутствуют
                </h1>
            }


        </div>
    );
};

export default App;
