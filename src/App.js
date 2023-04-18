import React from "react";

function App() {
  const handleClick = () => {
    alert('You clicked this button');
  };

  return (
    <div>
      <img
        src="https://i.pinimg.com/236x/f6/4d/45/f64d4591c7c1088c5ff87ec41bfb0acf.jpg"
        alt="How to tie ties"
      />
      <p>How to tie a tie. </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
  
}

export default App;
