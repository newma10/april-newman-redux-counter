export const ADD_COUNT = 'counter/ADD_COUNT';
export const ADDITION = 'counter/ADDITION';
export const SUBTRACT = 'counter/SUBTRACT';
export const MULTIPLY = 'counter/MULTIPLY';
export const DIVIDE = 'counter/DIVIDE';
export const CLEAR = 'counter/CLEAR';

const initState = {
    count: 0,
    firstInput: '',
    secondInput: '',
    calculation: null
}

export default function reducer(state = initState, action) {
    switch (action?.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case ADDITION:
            return {
                ...state,
                calculation: parseFloat(action.inputs.firstInput) + parseFloat(action.inputs.secondInput)
            }
        case SUBTRACT:
            return {
                ...state,
                calculation: parseFloat(action.inputs.firstInput) - parseFloat(action.inputs.secondInput)
            }
        case MULTIPLY:
            return {
                ...state,
                calculation: parseFloat(action.inputs.firstInput) * parseFloat(action.inputs.secondInput)
            }
        case DIVIDE:
            return {
                ...state,
                calculation: parseFloat(action.inputs.firstInput)/parseFloat(action.inputs.secondInput)
            }
        case CLEAR:
            return {
                ...state,
                calculation: '',
                firstInput: state.firstInput,
                secondInput: state.secondInput
            }
        default:
            return {
                ...state
            }
    }
}