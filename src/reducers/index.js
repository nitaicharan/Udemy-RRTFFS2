const INCREASE = 'COUNTER/INCREASE';
const DECREASE = 'COUNTER/DECREASE';
const SET = 'COUTER/SET';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const set = payload => ({ type: SET, payload });

const initialState = 0;
export default function (state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        case SET:
            return action.payload;
        default:
            return state;
    }
}