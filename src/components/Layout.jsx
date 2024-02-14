//El layout es donde se va a cargar toda mi aplicación, la estructura de mi sitio web
//Outlet te permite definir donde se van a cargar los distintos componentes
//Si me voy a app.jsx el primer nivel de route sera el navbar y el resto será el Outlet
import { Outlet } from 'react-router-dom';

import Navbar from "./Navbar";

const Layout = () => {
   return (
      <div>
         <h1>Welcome to React Router Demo</h1>
         <Navbar />
         <Outlet />
      </div>
   );
}

export default Layout;
