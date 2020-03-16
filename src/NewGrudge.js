import React, { useState, memo, useContext } from 'react';
import {GrudgeContext} from './GrudgeContext'

const NewGrudge = memo(() => {
  //memo dosent work with context
  const {addGrudge} = useContext(GrudgeContext)
  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');

  const handleChange = event => {
    event.preventDefault();
    addGrudge({ person, reason });
  };

  return (
    <form className="NewGrudge" onSubmit={handleChange}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={event => setPerson(event.target.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={event => setReason(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
});

export default NewGrudge;