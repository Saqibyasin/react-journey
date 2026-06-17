function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p>© {currentYear} Kifayat Bhat. All rights reserved.</p>
        </div>

    )
}
export default Footer;