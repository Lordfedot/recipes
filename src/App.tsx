import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import MyRecipes from "./Components/MyRecipes";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/myrecipes" element={<MyRecipes />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
