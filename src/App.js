import React, { useReducer} from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

const reducer = (state, action) => {

console.log(state)
  return [action.payload, ...state]

}

const App = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState)



  const addGrudge = ({person, reason}) => {
    dispatch({
      type: GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false,
        id: id()

      }
    })
  }
  const toggleForgiveness = id => {
    // setGrudges(
    //   grudges.map(grudge => {
    //     if (grudge.id !== id) return grudge;
    //     return { ...grudge, forgiven: !grudge.forgiven };
    //   })
    // );
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default App;