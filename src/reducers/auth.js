export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {
                id: action.id
            };
        case 'LOGOUT':
            return {
                id: null
            };
        default:
            return state;
    }
};
