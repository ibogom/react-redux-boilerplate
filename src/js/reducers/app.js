const app = (state = [], action) => {
    switch (action.type) {
        case 'GET_INITIAL_REQUEST':
            return {
                id: action.id,
                data: action.data,
                completed: false
            };
        default:
            return state;
    }
};

export default app;