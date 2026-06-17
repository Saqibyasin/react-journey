import ProfileCard from "./components/ProfileCard";
import ThemeToggle from "./components/ThemeToggle";

function App(){
  return (  <>
    <h1>Welcome to My Profile</h1>
    <ProfileCard
      name="John Doe"
      role="Software Engineer"
      skills={["JavaScript", "React", "Node.js"]}
      isOnline={true}
    />
    <ProfileCard
      name="Jame Smith"
      role="UI/UX Designer"
      skills={["Figma", "Adobe XD", "Sketch"]}
      isOnline={false}
    />
    <ThemeToggle />
    
  </>
  ) 
}
export default App;