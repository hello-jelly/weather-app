import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input 
        type='text' 
        placeholder='City' 
        maxLength='30' 
        name='city'
        // onChange={(e) => setCity(e.target.value)}
        />
      <input 
        type='text' 
        placeholder='Country' 
        maxLength='30' 
        name='country' 
        />
      <button type='submit'>Get Forecast</button>
    </form>
  )
}

export default Form;