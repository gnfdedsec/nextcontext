import React, { useContext, useState } from 'react';
import MyContext from '@/src/context';

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products?limit=12');
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}

export default function Index({ products }) {
  const { value } = useContext(MyContext);
  const [searchValue] = useState('');

  // Filter the list with matching `value` from useContext and case-insensitive search
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())||
    item.brand.toLowerCase().includes(value.toLowerCase())
  );



  return (
    <>
      <h1>Value from Navbar: {value}</h1>
      <div>
      
      </div>
      <div>
        {filteredProducts
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) => (
            <div key={item.id}>
              {item.id} {item.title} {item.brand}
            </div>
        ))}
      </div>
    </>
  );
}