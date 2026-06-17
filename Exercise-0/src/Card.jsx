function Card({title, bio, tech , isCompleted}){
     return (
        <div>
            <h2>{title}</h2>
            <p>{bio}</p>
           <ul>
            <li>{tech[0]}</li>
            <li>{tech[1]}</li>
            <li>{tech[2]}</li>
           </ul>
           <p> {isCompleted ? "Completed" : "Not Completed"}</p>
        </div>       
     )
}
export default Card;