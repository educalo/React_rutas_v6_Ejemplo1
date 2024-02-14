import { useEffect, useState } from 'react';
//useParams es un hook para capturar parametros que se pasan por la ruta
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const ProductDetail = () => {
   const [product, setProduct] = useState(null);
   //useParams me devuelve un objeto clave: valor; donde en la clave tengo el nombre del parametro y en el valor el valor del parametro
   //en este caso solo me quedo con productId
   //const params =useParams();
   //console.log(params)
   const { productId } = useParams();

   useEffect(() => {
      Axios.get(`https://dummyjson.com/products/${productId}`)
         .then(res => setProduct(res.data))
   }, [productId]);

   //sino tengo product me aparece un mensaje de Loading....
   return (
      <>
         {!product && <em>Loading...</em>}
         {product && (
            <>
               <h4>Product Detail Page: {product.title}</h4>
               <img src={product.thumbnail} alt={product.title} width="200" />
               <p>Category: {product.category}</p>
               <p>Description: {product.description}</p>
               <Link to="/products">Back to products page</Link>
            </>
         )}
      </>
   );
}

export default ProductDetail;
