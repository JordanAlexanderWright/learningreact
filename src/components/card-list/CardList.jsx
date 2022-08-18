import { Component } from "react";
import Card from '../card/Card.jsx'
import './card-container.styles.css'


class CardList extends Component {
  render() {

    let userList = this.props.userList;

    return(
        <div className={`card-container ${this.props.className}`}>
            {userList.map((user) => {
                return(
                    <Card user={user}/>
                )               
            })}            
        </div>
    )
  }
}

export default CardList;
