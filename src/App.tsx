import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Layout from "./Components/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
