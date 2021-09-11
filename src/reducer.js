export const initialState = {
    term: null
};

export const actionType = {
    SET_SEARCH_INPUT: "SET_SEARCH_INPUT",
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case actionType.SET_SEARCH_INPUT:
            return {
                ...state,
                term: action.term
            };
        default: return state;
    }
}
export default reducer;