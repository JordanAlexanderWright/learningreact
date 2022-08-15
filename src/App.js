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
        name: {firstName: 'Jordan', lastName: 'Wright'},
        company: 'JWProductions'
    }
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, my name is {this.state.name.firstName} {this.state.name.lastName}. I work at {this.state.company}
          </p>
          <button onClick={ () => {
            this.setState({name: {firstName:'Darth', lastName:'Vader'}})
            }}>Click Me</button>
        </header>
      </div>
    );
  }
}

export default App;
