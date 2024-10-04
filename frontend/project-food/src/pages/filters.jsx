import React from 'react';
import './home.css'


const SearchFilter = ({ query, setQuery, category, setCategory, country, setCountry }) => {
    return (
        <div className='search_filter'>
             <div className='search'>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Search menu items..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        </div>
        <div className="filter-section">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Dessert">Dessert</option>
            </select>

            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">All Countries</option>
                <option value="Cairo">Cairo</option>
                <option value="Fayoum">Fayoum</option>
                <option value="Alexandria">Alexandria</option>
            </select>
        </div>
        </div>
    );
};

export default SearchFilter;