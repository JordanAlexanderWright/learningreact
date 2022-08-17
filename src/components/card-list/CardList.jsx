import { Component } from "react";
import './card.styles.css'
import './card-container.styles.css'

class CardList extends Component {
  render() {
    let userList = this.props.userList;

    return (
      <div className={`card-container ${this.props.className}`}>
        {userList.map((user) => {
          return (
          <div key={user.id} className='card'>
                <img src={`https://robohash.org/${user.name}.png ?set=set4`} alt={`monster ${user.name}`}></img>
                <h2 >{user.name}</h2>
          </div>
          )            
        })}
      </div>
    );
  }
}

export default CardList;
