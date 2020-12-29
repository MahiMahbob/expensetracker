const incomeReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                transictions: [action.payload, ...state.transictions],
                text: '',
                amount: ''
            }
        case 'DLT_ITEM':
            return {
                ...state,
                transictions: state.transictions.filter(transiction => transiction.id !== action.payload),
                isEdit: false,
                text: '',
                amount: ''
            }
        case 'EDIT_LISTING':
            return {
                ...state,
                transictions: state.transictions.map((element) =>
                    element.id === action.payload.id
                        ? action.payload.updatedItem
                        : element
                ),
                isEdit: false,
                text: '',
                amount: ''
            }
        case 'EDIT_CLICK':
            return {
                ...state,
                text: action.payload.text,
                amount: action.payload.amount,
                isEdit: true,
                currentTrans: action.payload
            }
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.payload.input]: action.payload.text,
            }
        case 'income':
            return {
                ...state,
                change: 'income',
                filterItems: action.payload === 'income' && state.transictions.filter(transiction => transiction.amount > 0)
            }
        case 'expense':
            return {
                ...state,
                change: 'expense',
                filterItems: action.payload === 'expense' && state.transictions.filter(transiction => transiction.amount < 0)
            }
        case 'all':
            return {
                ...state,
                change: 'all',
                filterItems: action.payload === 'all' && state.transictions
            }
        default:
            return state
    }
}

export default incomeReducer