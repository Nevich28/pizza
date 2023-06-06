import React, { ReactNode } from 'react';
type WrapperProps = {
    children: ReactNode;
};
export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className="container mx-auto mt-11 mb-16 bg-white rounded-lg pt-12 px-4 pb-24 md:px-16">
            {children}
        </div>
    );
};
