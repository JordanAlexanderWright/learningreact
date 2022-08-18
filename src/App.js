// importing useState

import {useState, useEffect} from 'react'
import CardList from './components/card-list/CardList.jsx'
import SearchBox from './components/search-box/SearchBox.jsx'
import './App.css';

const App = () => {
    // This is basically creating individual data sets, like an object, but not in an object. 


    const [searchField, setSearchField] = useState(''); // [value, setvalueFunction]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    // First argument is a callback function, then an array of dependencies (most likely state values or prop values). 
    // Whenever the vlaues inside the dependancy change, the callback function runs
    // If the dependancy is left blank, it will never run again after the first render
    useEffect(() =>{
            
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users));
    }, [])

    useEffect(() => {
        
        let monsterList = []
        monsters.forEach(monster => {
                  
          let slice = monster.name.slice(0, searchField.length)           
          if(slice.toLowerCase() === searchField.toLowerCase()){
            monsterList.push(monster)
          }      
      })

      setFilteredMonsters(monsterList)
    
    }, [monsters, searchField])
  
    const onSearchChange = (event) => {
      let searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);
    }


    return(
        <div className='App'>
            <h1 className='app=title'>Monsters Rolodex</h1>

            <SearchBox
                className='monsters-search-box'
                onChangeHandler={onSearchChange}
                placeHolder='search monsters'
            />
           
         
            <CardList userList={filteredMonsters}/>
        </div>
    )
}

export default App;
