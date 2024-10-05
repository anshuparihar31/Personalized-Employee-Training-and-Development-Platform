// frontend/src/components/Footer.jsx

import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    {/* You can replace this SVG with your logo if you want */}
                    <svg className="bi" width="30" height="24">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 SkillForge | All Rights Reserved</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex footer-left">
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <FaLinkedin size={24} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <FaTwitter size={24} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <FaInstagram size={24} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <FaFacebook size={24} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
