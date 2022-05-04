import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function ChallengesComponent() {
  const { challengesType, setChallengesType } = useContext(AppContext);
  return (
    <fieldset>
      <label class="form-label">2) Gosta de aprender com desafios?</label>
      <br />
      <input
          class="btn-check"
          id="challenges-yes"
          type="radio"
          name={ challengesType }
          value="Sim"
          onChange={ ({ target: { value } }) => setChallengesType(value) }
        />
      <label class="btn btn-secondary" htmlFor="challenges-yes">
        Sim
      </label>
      <input
          class="btn-check"
          id="challenges-no"
          type="radio"
          name={ challengesType }
          value="Não"
          onChange={ ({ target: { value } }) => setChallengesType(value) }
        />
      <label class="btn btn-secondary" htmlFor="challenges-no">
        Não
      </label>
    </fieldset>
  )
}