import { Link } from "react-router-dom";

const Footer = () => {
    return (
        
    <div className="footer-bar">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-md-8">
                <ul className="footer-links">
                    <li><a href="#">Whitepaper</a></li>
                    <li><Link to='/faq'>FAQs</Link></li>
                    <li><Link to='/regular'>Privacy Policy</Link></li>
                    <li><Link to='/regular'>Terms of Condition</Link></li>
                </ul>
            </div>
            <div className="col-md-4 mt-2 mt-sm-0">
                <div className="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                    <div className="copyright-text">&copy; 2023 GDPcoin.</div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Footer;