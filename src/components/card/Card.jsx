import './card.styles.css'

const Card = ({ user }) => {
    const {email, name, id} = user
    return(
        <div key={id} className='card'>
            <img src={`https://robohash.org/${name}.png?set=set4&size=180x180`} alt={`monster ${name}`}></img>
            <h2 >{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card