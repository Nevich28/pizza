import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: { className: string }) => (
    <ContentLoader
        speed={2}
        width={110}
        height={56}
        viewBox="0 0 110 56"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="0" y="0" rx="28" ry="28" width="110" height="56" />
    </ContentLoader>
);

export default Skeleton;
