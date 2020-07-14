import React, { useState } from 'react';
import Counter from './components/Counter';
import Info from './components/Info';

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
        </div>
      )}
    </div>
  );
}

export default App;
