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
      monsters: [
        {
          firstName: 'Bob',
          lastName: 'Builder',
          id: '123lkjmzio1'
        },
        {
          firstName: 'Big',
          lastName: 'Bird',
          id: '123098amziwe'
        },
        {
          firstName: 'Victor',
          lastName: 'Vran',
          id: '0930982jla'
        }
      ]
        
    }
  }

  render() {
    
    return (
      <div className="App">
   
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.firstName} {monster.lastName}</h1>
          })
        }

      </div>
    );
  }
}

export default App;
