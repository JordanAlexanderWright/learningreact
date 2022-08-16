// Converting to a class component
import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

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
    },
    () => {
      console.log(this.state)
    }
    ));

  }

  returnMonsters() {

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

    let filteredMonsters = this.returnMonsters()
  
    
    return (
      <div className="App">
        <input className='searchBox'
        type='search' 
        placeholder='Search Monsters...' 
        onChange={(event) => {
        
         this.setState(() => {
          return {searchField:event.target.value}
         })         

        }}></input>
   
        {
         filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }

      </div>
    );
  }
}

export default App;
