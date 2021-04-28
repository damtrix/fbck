
const INITIAL_STATE = {
    welcomeData: null,
}


const welcomeDataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_WELCOME_DATA':
            return {
                ...state,
                welcomeData: action.payload
            }

    default:
        return state;
    }
}

export default welcomeDataReducer