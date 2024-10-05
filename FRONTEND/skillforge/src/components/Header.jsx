// frontend/src/components/Header.jsx

import { Link } from 'react-router-dom'; 
import '../App.css'; 
import SkillForgeImage from '../assets/SkillForge_5.jpg'; // Image import

function Header() {
    return (
        <header className="p-3 text-bg-dark padding-header">
            <div className="width">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link
                        to="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <img
                            src={SkillForgeImage}
                            alt="SkillForge Logo" // Update alt text
                            width="140"
                            height="50"
                            className="me-2"
                        />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-4 text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses" className="nav-link px-3 text-white">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="/skill-assessment" className="nav-link px-3 text-white">
                                Skill Assessment
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-profile" className="nav-link px-3 text-white">
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="nav-link px-3 text-white">
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input
                            type="search"
                            className="form-control form-control-dark text-white"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>

                    <div className="text-end">
                        <Link to="/login">
                            <button type="button" className="btn btn-outline-light me-2">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button type="button" className="btn btn-warning">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
