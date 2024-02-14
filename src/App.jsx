import { Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";


//Routes es un conjunto de rutas
//Route path donde se va a ir y el elemento que se va a mostar
//Primer Route sera el que se muestra siempre y el segundo nivel el resto de rutas
//index indica cuando se carge el componente principal layout se carge el elemento Home
//"products/*"" me permite tener varias rutas dentro de esta ruta products
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products/*" element={<Products />} />
        <Route path="search" element={<SearchResults />} />
      </Route>
      <Route path="*" element={<NotFound />} />

      {/* Indica que puedo definir otras estructura de rutas por ejemplo /account/profile
        <Route path="/account" element={<AccountLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
      </Route> */}
    </Routes>
  )
}

export default App