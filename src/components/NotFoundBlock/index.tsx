import React from 'react';

export const NotFoundBlock = () => {
    return (
        <div className="text-center p-24">
            <h1 className="text-6xl">
                <span>😕</span>
                <br />
                Nothing found
            </h1>
            <p className=" mt-5 text-xl">Unfortunately, the page is not available in our store</p>
        </div>
    );
};
