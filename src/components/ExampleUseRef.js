import React, { useRef } from 'react';

const RefSample = () => {
  const id = useRef(1);
  const setId = n => {
    id.current = n;
  }
  const prindId = () => {
    console.log(id.current);
  }
  return (
    <div>
      refSample {id.current}<br />
      <button type="button" onClick={setId(id.current+1)}>+1</button>
      <button type="button" onClick={prindId}>console.log(id)</button>
    </div>
  )
}

export default RefSample;