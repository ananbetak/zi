import { GET_DATA } from '../Types';

const initialState = {
    Products: null,
    Counter: 0,
    Message: null,
    DataToAdd: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                Products: action.payload.Data,
                Counter: action.payload.Counter,
                Message: action.payload.Message,
                DataToAdd: action.payload.DataToAdd,
            }
        default: return state
    }
}

export default dataReducer;