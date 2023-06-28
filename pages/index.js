import React, { useContext } from 'react';
import MyContext from '@/src/context';

export default function Index() {
  const { value } = useContext(MyContext);

  return (
    <div>
      <h1>Value from Navbar: {value}</h1>
    </div>
  );
}

