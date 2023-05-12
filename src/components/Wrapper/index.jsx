import React from 'react';

export const Wrapper = ({ children }) => {
    return (
        <div className="container mx-auto mt-11 mb-16 bg-white rounded-lg pt-12 pl-4 pr-4 pb-24 md:pl-16 md:pr-16">
            {children}
        </div>
    );
};
