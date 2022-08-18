// importing useState

import {useState} from 'react'
import CardList from './components/card-list/CardList.jsx'
import SearchBox from './components/search-box/SearchBox.jsx'
import './App.css';

const App = () => {
    // This is basically creating individual data sets, like an object, but not in an object. 
    const [searchField, setSearchField] = useState(''); // [value, setvalueFunction]

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
        console.log(searchField);
    }

    return(
        <div className='App'>
            <h1 className='app=title'>Monsters Rolodex</h1>

            <SearchBox
                className='monsters-search-box'
                onChangeHandler={onSearchChange}
                placeHolder='search monsters'
            />

            <CardList />
        </div>
    )
}

export default App;
