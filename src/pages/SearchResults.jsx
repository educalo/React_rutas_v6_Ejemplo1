import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios';

import ProductsList from "../components/ProductsList";

const SearchResults = () => {
   //parametros de tipo queryString: parte de una consulta de URL a partir de la ?
   const [searchParams] = useSearchParams();
   
   //para averiguar el parametro que viajo en la URL
   //console.log(searchParams.get("keyword"));

   const [products, setProducts] = useState([]);

   //estoy utilizando un metodo de la api para hacer busquedas cuando cambie el searchParams
   useEffect(() => {
      //termino de busqueda añadido en el imput
      console.log(searchParams.get("keyword"))
      Axios.get(`https://dummyjson.com/products/search?q=${searchParams.get("keyword")}`)
         .then(res => setProducts(res.data.products))
   }, [searchParams])

   //La expresión completa renderizará el texto en itálicas "No products found" solo si la longitud del array `products` es 0. Si hay productos en el array, no se renderizará nada.
   return (
      <div>
         <h4>Search Results</h4>
         {products.length === 0 && <em>No products found</em>}
         {products.length && <ProductsList products={products} />}
      </div>
   );
}

export default SearchResults;
