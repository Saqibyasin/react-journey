import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";
import SkillBadge from "./Skillbadge";
function App(){
    return (
        <div>
            <h1>Hello React</h1>
            <Navbar />
            <Hero title="Kifayat Bhat" bio="I am a web developer" role="Frontend Developer" isAvailable={true} />
            <Card title="Project 1" bio="This is a project description" tech={["React", "Tailwind", "Vite"]} isCompleted={true} />
            <Card title="Project 2" bio="This is another project description" tech={["JavaScript", "CSS", "HTML"]} isCompleted={false} />
            <Card title="Project 3" bio="This is yet another project description" tech={["Node.js", "Express", "MongoDB"]} isCompleted={true} />
           
            <SkillBadge skill="JavaScript" level="Advanced" />

            <SkillBadge skill="React" level="Intermediate" />

            <SkillBadge skill="Node.js" level="Beginner" />

             <Footer />
        </div>
    )
}
export default App;