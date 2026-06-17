import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';

function App(){
  return (
    <>
      <Navbar />
      <Card tittle="My Project" description="This is my project description" tech={["React", "JavaScript"] } isCompleted = {true} />
      <Card tittle="My Project 2" description="This is my project description 2" tech={["HTML", "CSS"]} isCompleted={false}/>
      <Card tittle="My Project 3" description="This is my project description 3" tech={["Python", "Django"]} isCompleted={true} />
      <Footer />
    </>    
  );
}

export default App;