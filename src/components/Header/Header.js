import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="text-center mt-2">
                <Link to="/home" className="me-5 fs-5">Home</Link>
                <Link to="/add" className="me-5 fs-5">Add Products</Link>
            </nav>
        </div>
    );
};

export default Header;