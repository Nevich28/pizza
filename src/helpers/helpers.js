export const sortStateItems = (tempFilteredItems, value, sortDirection) => {
    const comparePopularity = (a, b) =>
        sortDirection ? (a.rating < b.rating ? -1 : 1) : a.rating > b.rating ? -1 : 1;
    const compareByPrice = (a, b) =>
        sortDirection ? (a.price[0] < b.price[0] ? -1 : 1) : a.price[0] > b.price[0] ? -1 : 1;
    const compareTitle = (a, b) =>
        sortDirection ? (a.title < b.title ? -1 : 1) : a.title > b.title ? -1 : 1;
    switch (value) {
        case 'popularity':
            tempFilteredItems.sort(comparePopularity);
            break;
        case 'by price':
            tempFilteredItems.sort(compareByPrice);
            break;
        case 'alphabetically':
            tempFilteredItems.sort(compareTitle);
            break;
        default:
    }
    return tempFilteredItems;
};
