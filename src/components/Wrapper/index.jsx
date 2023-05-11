import React from 'react';

export const Wrapper = ({ children }) => {
    return (
        <div className="container mx-auto mt-11 mb-16 bg-white rounded-lg pt-12 pl-16 pr-12 pb-24">
            {children}
        </div>
    );
};
