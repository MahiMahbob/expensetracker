import React, { useContext, useReducer, useEffect} from 'react'
import incomeReducer from './incomeReducer'

const initialState = {
    transictions: JSON.parse(localStorage.getItem('transictions')) || [],
    change: 'all',
    filterItems: [],
    isEdit: false,
    text: '',
    amount: '',
    currentTrans: {}
}

const GlobalContext = React.createContext(initialState)

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(incomeReducer, initialState)

    localStorage.setItem('transictions', JSON.stringify(state.transictions))

    const addTransaction = item => {
        dispatch({ type: 'ADD_ITEM', payload: item })
    }

    const deleteTransaction = id => {
        dispatch({ type: 'DLT_ITEM', payload: id })
    }

    const fliterItemChange = filter => {
        dispatch({ type:filter, payload: filter})
    }


    const editListing = val => {
        dispatch({
            type: 'EDIT_LISTING',
            payload: {
              id: val.id,
              updatedItem: val
            },
          });
    }
    
    const editClick = (item) => {
        dispatch({
          type: 'EDIT_CLICK',
          payload: item,
        });
      };

      const changeInput = (text, input) => {
        dispatch({
          type: 'CHANGE_INPUT',
          payload: { text, input }
        });
      }

    useEffect(() => {
        fliterItemChange(state.change)
    }, [state.transictions,state.change])

    const value = {
       transictions: state.transictions,
       filterItems: state.filterItems,
       addTransaction,
       deleteTransaction,
       fliterItemChange,
       change: state.change,
       editClick,
       editListing,
       changeInput,
       text: state.text,
       amount: state.amount,
       isEdit: state.isEdit,
       currentTrans: state.currentTrans
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useContextValue() {
    return useContext(GlobalContext);
}