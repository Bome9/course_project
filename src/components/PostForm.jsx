import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = { //
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <div>
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
        </div>
    );
};

export default PostForm;
