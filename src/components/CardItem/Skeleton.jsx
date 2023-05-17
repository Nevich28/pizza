import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={250}
        height={480}
        viewBox="0 0 250 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="125" cy="125" r="125" />
        <rect x="0" y="265" rx="5" ry="5" width="250" height="30" />
        <rect x="0" y="310" rx="5" ry="5" width="250" height="110" />
        <rect x="0" y="450" rx="5" ry="5" width="70" height="28" />
        <rect x="140" y="445" rx="16" ry="16" width="110" height="32" />
    </ContentLoader>
);
