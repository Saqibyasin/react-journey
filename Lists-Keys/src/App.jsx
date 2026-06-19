import SkillItem from "./SkillItem";
function App(){
  const skills = [
  { id: 1, name: "React", level: "Intermediate" },
  { id: 2, name: "JavaScript", level: "Advanced" },
  { id: 3, name: "HTML", level: "Advanced" },
  { id: 4, name: "CSS", level: "Intermediate" }
];

return (
  <div>
    <ul>
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill.name} level={skill.level} />
      ))}
    </ul>
  </div>
)
}

export default App;