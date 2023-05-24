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

export const errorConvert = (error) => {
    switch (error) {
        case 'auth/wrong-password':
            return 'incorrect password';
        case 'auth/user-not-found':
            return 'there is no such customer';
        case 'auth/weak-password':
            return 'too easy a password';
        case 'auth/email-already-in-use':
            return 'there is already such a customer';
        default:
            return error;
    }
};
