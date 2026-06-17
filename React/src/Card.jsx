function Card({tittle = "Project Us", description, tech, isCompleted}) {
    return (
        <div className="card">
            <h2>{tittle}</h2>
            <p>{description}</p>
            <p>Technology Used</p>
            <ul className="list-none">
                <li>{tech[0]}</li>
                <li>{tech[1]}</li>
            </ul>
            <p>{isCompleted ? "✅ Completed" : "⏳ In Progress"}</p>
        </div>
    )
}
export default Card;
