import React from 'react';
import useMyStore from '@/src/context';

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
  const { value, setValue } = useMyStore();


  // Filter the list with matching `value` from useContext and case-insensitive search
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase()) ||
    item.brand.toLowerCase().includes(value.toLowerCase()) ||
    item.id.toString().includes(value)
  );

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <h1>Value from Navbar: {value}</h1>
      <div>

      </div>
      <div>
        {filteredProducts.map((item) => (
          <div key={item.id}>
            {item.id} {item.title} {item.brand}
          </div>
        ))}
      </div>
    </>
  );
}

