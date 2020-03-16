import React, { useReducer, useCallback} from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

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

const App = () => {
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
    dispatch({
      type: GRUDGE_FORGIVE,
      payload: {
        id
      }
    })
  }, [dispatch])//if not wrapped in useCallback, a new function is created by js every time app reloads...so when it is wrapped,
  //then it will change only when dependency(dispatch) changes, but dispatch, like ref is the same reference across rerenders.
  // so it dosent change & new functions are not created on every reload & react.memo can be used to check if intended props change

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
}

export default App;