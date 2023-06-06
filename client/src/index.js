import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
  const handleClick = () => {
    alert('Hello, World!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
