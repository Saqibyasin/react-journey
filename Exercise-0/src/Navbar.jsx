function Navbar (){
    return (
        <nav className = "flex justify-between items-center px-8 py-4">
            <h2>Kifayat Bhat</h2>
            <ul className="list-none flex gap-4 text-lg font-medium text-gray-600 ">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;