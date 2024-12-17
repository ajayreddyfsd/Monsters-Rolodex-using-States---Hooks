import {Component, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';
import React from 'react';
import { useState } from 'react';


const App = () => {

  console.log('render')

  const [monsters, setMonsters] = useState([])
  const [displayMonsters, setDisplayMonsters] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(x => x.json())
    .then(y => {
      setMonsters(y)
      setDisplayMonsters(y)
    })}, [])


  const onSearchChange = (event) => {
    console.log(event.target.value)
    if(event.target.value.length !== 0){
      let filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(event.target.value.toLowerCase()) )
      setDisplayMonsters(filteredMonsters)
    }else{
      setDisplayMonsters(monsters)
    }
  }

  return <div className="App">
         <h1 className="app-title eater-regular">Monsters Rolodex</h1>
         <SearchBox onSearchChange={onSearchChange}></SearchBox>
         <CardList displayMonsters={displayMonsters}></CardList>
  </div>

  }

export default App




