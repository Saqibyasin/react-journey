function Footer(){
    const date = new Date().getFullYear();
    return (
        <footer className=" text-white text-center py-4">
            <p>&copy; {date} Kifayat Bhat. All rights reserved.</p>
        </footer>
    )
}
export default Footer;