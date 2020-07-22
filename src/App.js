import React, { useState } from 'react';
import Counter from './components/Counter';
import Info from './components/Info';
import Average from './components/Average';
import ExampleUseRef from './components/ExampleUseRef';

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button
        type="button"
        onClick={() => setVisible(!visible)}
      >
        {visible ? '숨기기': '보이기'}
      </button>
      {visible && (
        <div>
          <Counter />
          <br />
          <Info />        
          <Average />
          <br />
          <ExampleUseRef />
        </div>
      )}
    </div>
  );
}

export default App;
