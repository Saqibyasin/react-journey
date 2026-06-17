function Navbar(){
    const name = "Kifayat Bhat";
    return (
      
            <nav className="navbar">
                 <h1>{name}</h1>
                 <ul>
                     <li><a href="#home">Home</a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="#contact">Contact</a></li>
                 </ul>
            </nav>
        
    );
}
export default Navbar;