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

    this.state ={
      monsters: []        
    }

  }

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

  render() {
    
    return (
      <div className="App">
   
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }

      </div>
    );
  }
}

export default App;
