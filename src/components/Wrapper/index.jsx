import React from 'react';

export const Wrapper = ({ children }) => {
    return (
        <div className="container mx-auto mt-11 mb-16 bg-white rounded-lg pt-12 px-4 pb-24 md:px-16">
            {children}
        </div>
    );
};
