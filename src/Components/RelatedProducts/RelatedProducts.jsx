import React, { useContext } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const RelatedProducts = (props) => {
  const { all_product } = useContext(ShopContext);
  const { product } = props;

  // Filter and slice the first 3 items with the same category as the current product
  const relatedItems = all_product
    .filter((item) => product.category === item.category && product.id !== item.id) // Exclude the current product
    .slice(0, 3);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedItems.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
