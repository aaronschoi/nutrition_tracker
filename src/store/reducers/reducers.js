export const isLoggedIn = (state = false, action) => {
    switch(action.type) {
        case("authenticated"):
            return true;
        case("deauthenticated"):
            return false;
        default:
            return state
    }
}

export const user = (state = {}, action) => {
    switch(action.type) {
        case("authenticated"):
            return {...action.payload};
        case("deauthenticated"):
            return {};
        default:
            return state;
    }
}

export const foodlog = (state = [], action) => {
    switch(action.type) {
        case("authenticated"):
            const newState = action.payload.map(food => {
                return {...food}
            })
            return newState;
        case("deauthenticated"):
            return [];
        default:
            return state;
    }
}