function Hero({ title, bio , role , isAvailable}){
    return (
        <div>
            <h2>{title}</h2>
            <p>{bio}</p>
            <p>{role}</p>
            <p>{isAvailable ? "🟢 Open to Work" : "🔴 Not Available"}</p>
        </div>
    )

}
export default Hero;