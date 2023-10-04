/* import React from 'react';
import useMyStore from '@/src/context';

export default function Navbar() {
  const { value, setValue } = useMyStore();

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
*/
import React from 'react';
import useMyStore from '@/src/context';

export default function Navbar() {
  const { value, setValue } = useMyStore();

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <nav>
      <input type="text" onChange={handleInputChange} value={value} />
    </nav>
  );
}
