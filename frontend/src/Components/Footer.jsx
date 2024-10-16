import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 My Book App. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/Roy3443" className="hover:text-gray-400">GitHub</a>
                    <a href="https://linkedin.com/" className="hover:text-gray-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
