import { Component } from "react";
import './card.styles.css'
import './card-container.styles.css'

class CardList extends Component {
  render() {
    let userList = this.props.userList;
   

    return (
      <div className={`card-container ${this.props.className}`}>
        {userList.map((user) => {
             let {name, id, email} = user;
          return (
          <div key={id} className='card'>
                <img src={`https://robohash.org/${name}.png?set=set4&size=180x180`} alt={`monster ${name}`}></img>
                <h2 >{name}</h2>
                <p>{email}</p>
          </div>
          )            
        })}
      </div>
    );
  }
}

export default CardList;
