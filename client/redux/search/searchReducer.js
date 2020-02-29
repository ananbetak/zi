import { SEARCH } from '../Types';

const initialState = {
    Product: null,
    Message: null,
    isLoading: false
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                Product: action.payload.Product,
                Message: action.payload.Message,
                isLoading: false,
            }
        default: return state
    }
}

export default searchReducer;