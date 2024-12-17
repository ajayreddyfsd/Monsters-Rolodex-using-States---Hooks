import { Component } from "react";
import './search-box-styles.css'

const SearchBox = ({onSearchChange}) => {
    return <input className='search-box' type="search" placeholder='search monsters' onChange={onSearchChange}></input>
}

export default SearchBox;