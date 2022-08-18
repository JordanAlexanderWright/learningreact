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
            // This way of updating state is done asynchronously
            // this.setState({name: {firstName:'Darth', lastName:'Vader'}})

            // First function is an updater function.
            // Second function is a callback function. Will run once the first is finished
            // WE get access to the state as a variable
            // Props work with components
            this.setState((state, props) => {
              return {
                name: {firstName: 'Darth', lastName: 'Vader'}
              }
            }, 
            // This only runs after the original function (the update) runs. 
            () => {
              console.log(this.state);
            })
            }}>Click Me</button>
        </header>
      </div>
    );
  }
}

export default App;
