import React, { useContext } from 'react';
import MyContext from '@/src/context';

export default function Navbar() {
  const { value, setValue } = useContext(MyContext);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value);
    }
  };

  return (
    <nav>
      <input type="text" onKeyDown={handleKeyDown} />
    </nav>
  );
}