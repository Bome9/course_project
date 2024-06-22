import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск по названию"
                vlaue={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})} //здесь мы передаем в функцию setFilter новые значения
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по:"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По содержанию' }
                ]}
            />
        </div>
    );
};

export default PostFilter;
