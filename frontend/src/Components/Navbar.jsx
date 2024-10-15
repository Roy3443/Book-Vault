import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/">📚 My Book Vault</Link>
                </div>
                <div className="flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-200">About</Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;