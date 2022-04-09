import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Order from "./component/Orders/Order";
import Product from "./component/Product/Product";
import Registar from "./component/Registar/Registar";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Vip from "./component/Vip/Vip";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/vip" element={<Vip></Vip>}></Route>
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Registar></Registar>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
