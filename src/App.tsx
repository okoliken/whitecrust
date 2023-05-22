import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider

} from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import About from "./pages/About";
import RootLayouts from "./layouts/RootLayouts";
import Business from "./pages/Business";
import Products from "./pages/Products";
import Careers from "./pages/Careers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route  index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/our-business" element={<Business />} />
      <Route path="/our-products" element={<Products />} />
      <Route path="/careers" element={<Careers />} />
    </Route>
  )
)

function App() {


  return (
   <RouterProvider router={router} />
  )
}

export default App
