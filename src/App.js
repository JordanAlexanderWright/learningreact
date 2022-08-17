// Converting to a class component
import {Component} from 'react'
import CardList from './components/card-list/CardList.jsx'
import SearchBox from './components/search-box/SearchBox.jsx'
import logo from './logo.svg';
import './App.css';
// import './components/search-box/SearchBox.styles.css'

//This has the same functionality as before, but it was converte to a class
// COmponent already has the render() method, and it palces what I want to render inside of it. The JSX. 
class App extends Component {

  //Inside of the constructor, call super to inherit from the parent class, then instantiate the state. 
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''       
    }

  }

  // Component Did Mount runs the very first time the component mounts. Meaning if I want something like, data from an api, to display on my page
  // I can place the functionality under this method and it will run. 
  componentDidMount(){
     
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(() => {
      return {monsters: users}
    })
    );

  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  returnMonsters = () => {

    let monsterList = []
    this.state.monsters.forEach(monster => {
  
      let slice = monster.name.slice(0, this.state.searchField.length)           
      if(slice.toLowerCase() === this.state.searchField.toLowerCase()){
        monsterList.push(monster)
      }
    })

    return monsterList
}


  render() {
    const {returnMonsters, onSearchChange} = this;
    let filteredMonsters = returnMonsters()
    
    return (
      <div className="App">      
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder={'Search Monsters...'} onChangeHandler={onSearchChange} className ='monstersSearchBox'/>
        <CardList userList={filteredMonsters} somethingelse={'hello'}/>
      </div>
    );
  }
}

export default App;
