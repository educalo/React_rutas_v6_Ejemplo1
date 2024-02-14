import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();

   //para captura el texto introducido en el input de la búsqueda
   //mando con navigate a la ruta que quiero ir, estoy haciendo redirecciones
   const [keyword, setKeyword] = useState("");

   const handleSubmit = e => {
      //para no refrescar la página
      e.preventDefault();
      //cambio de estado keyword
      setKeyword("");
      //borrar el formulario
      e.target.reset();
      navigate(`/search?keyword=${keyword}`);
   }
   //componente link para establecer enlaces
   //establezco un formulario para las busquedas
   return (
      <>
         <hr />
         <Link to="/">Home</Link>{" "}
         <Link to="about">About Us</Link>{" "}
         <Link to="products">Products</Link>{" "}
         <form
            onSubmit={handleSubmit}
            style={{ display: "inline-flex" }}
         >
            <input
               type="text"
               placeholder="Search"
               defaultValue={keyword}
               onChange={e => setKeyword(e.target.value)}
            />
            <button type="submit">Find!</button>
         </form>
         <hr />
      </>
   );
}

export default Navbar;
