import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/about" index element={<About />} />
      <Route path="/contact" index element={<Contact />} />
      <Route path="/cart" index element={<Cart />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
