import { Component } from "react";
import monsterImage from 'C:/projects/fewdprojects/monstersrolodex/src/assets/blastoise.png'

class CardList extends Component {
  render() {
    let userList = [];
    try {
      userList = this.props.userList;
    } catch {}

    return (
      <div className='cardContainer'>
        {userList.map((user) => {
          return (
          <div key={user.id} className='card'>
                <img src={monsterImage} alt='monster'></img>
                <h2 >{user.name}</h2>
          </div>
          )            
        })}
      </div>
    );
  }
}

export default CardList;
