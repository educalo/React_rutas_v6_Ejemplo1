import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Axios from "axios";

import ProductsList from '../components/ProductsList';
import ProductDetail from '../components/ProductDetail';

const Products = () => {
   //estado de productos
   const [products, setProducts] = useState([]);

   //para llamar a la api necesito un useEffect
   useEffect(() => {
      Axios.get("https://dummyjson.com/products")
         .then(res => setProducts(res.data.products))
   }, []);

   //los dos puntos en el path indica que es un parametro a enviar, si quiero pasar parametros optativos tengo que hacer anidamiento de rutas
   //si quisieramos pasar mas de un parametro por la ruta seria: :/productId/:otro1/:otro2
   //El index indica que cuando este en products...voy a cargar el componente ProductsList
   return (
      <>
         <h4>Products Page</h4>
         <Routes>
            <Route
               index
               element={<ProductsList products={products} />}
            />
            <Route path=":productId" element={<ProductDetail />} />
         </Routes>
      </>
   );
}

export default Products;
