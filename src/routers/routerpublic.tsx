import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/register";


const RouterPublic=()=> {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}
export {RouterPublic}