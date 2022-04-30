import React, { useState } from 'react';

export default function ChallengesComponent() {
  const [challengesType, setChallengesType] = useState('');
  return (
    <fieldset>
      <label className="challenges">2) Gosta de aprender com desafios?</label>
      <br />
      <label className="challenges-label" htmlFor="challenges-yes">
        <input
          className="challenges"
          id="challenges-yes"
          type="radio"
          name={ challengesType }
          value="Sim"
          onChange={ ({ target: { value } }) => setChallengesType(value) }
        />
        Sim
      </label>
      <label className="challenges-label" htmlFor="challenges-no">
        <input
          className="challenges"
          id="challenges-no"
          type="radio"
          name={ challengesType }
          value="Não"
          onChange={ ({ target: { value } }) => setChallengesType(value) }
        />
        Não
      </label>
    </fieldset>
  )
}