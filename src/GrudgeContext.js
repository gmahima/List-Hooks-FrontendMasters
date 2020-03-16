import React, { useReducer, useCallback, createContext} from 'react';

import id from 'uuid/v4';

import initialState from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

export const GrudgeContext = createContext()


const reducer = (state, action) => {
    if(action.type === GRUDGE_ADD){
      return [action.payload, ...state]
    }
    else if(action.type === GRUDGE_FORGIVE){
      let arr = state.map((item) => {
        console.log(action.payload.id)
        if(item.id === action.payload.id) {
          console.log("id", item.id)
          return (
            {...item, forgiven: !item.forgiven}
          )
          
        }
        return item
      })
      console.log(arr)
      return arr
    }
    return state
    
  
  }

  export const GrudgeProvider = (props) => {
    const [grudges, dispatch] = useReducer(reducer, initialState)



    const addGrudge = useCallback(({person, reason}) => {
      dispatch({
        type: GRUDGE_ADD,
        payload: {
          person,
          reason,
          forgiven: false,
          id: id()
  
        }
      })
    }, [dispatch])
    const toggleForgiveness = useCallback(id => {
      console.log("hi")
      dispatch({
        type: GRUDGE_FORGIVE,
        payload: {
          id
        }
      })
    }, [dispatch]) 


    return(
        <GrudgeContext.Provider value={
            {
                grudges,
                toggleForgiveness,
                addGrudge
            }
        }>
            {props.children}
        </GrudgeContext.Provider>
    )
  
  }


  