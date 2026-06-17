function SkillBadge({ skill, level }) {
    return (
        <div className="skill-badge">
            <h3>{skill}</h3>
            <p>Level: {level}</p>
        </div>
    );
}
export default SkillBadge;