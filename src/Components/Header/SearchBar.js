import React, { useState } from 'react';
import './styles/styles.css';
import { IoSearchOutline } from 'react-icons/io5';


function SearchBar() {
    const [search, setSearch] = useState('');
    const SearchHandler = (event) => {
        setSearch(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setSearch('');
    };

    return (

        <form onSubmit={submitHandler} className='search-bar'>
            <label>
                <IoSearchOutline />

            </label>
            <input type="text" 
            placeholder='Artists,songs or podcasts'
            value={search}
            onChange={SearchHandler}
            />
        </form>
    )
}

export default SearchBar
