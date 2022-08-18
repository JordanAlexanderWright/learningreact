
import Card from '../card/Card'
import './card-container.styles.css'


const CardList = ({ userList }) => {
  console.log(userList)
  return (
    <div className='card-container'>
      {userList.map( (user) => {
        return <Card user={user}/>
      })}
    </div>
  )
}

export default CardList