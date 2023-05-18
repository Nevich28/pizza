export const convertSortValue = (sortValue) => {
    switch (sortValue) {
        case 'popularity':
            return 'rating';
        case 'by price':
            return 'price';
        case 'alphabetically':
            return 'title';
        default:
            return '';
    }
};
