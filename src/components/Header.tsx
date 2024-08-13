import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white py-6">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold">LinkedIn Image Creator</h1>
                <p className="mt-2 text-lg">Create professional profile pictures and banners for LinkedIn</p>
            </div>
        </header>
    );
};

export default Header;
