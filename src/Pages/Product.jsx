import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const{all_product} = useContext(ShopContext);
  const {productId} = useParams(); //here we use useparams to find the product id and assign it in one variable
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
       <Breadcrum product={product}/>
       <ProductDisplay product={product}/>
       <DescriptionBox/>
       <RelatedProducts product={product}/>
    </div>
  )
}

export default Product
