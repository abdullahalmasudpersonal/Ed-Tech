import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Shared/Login/Login/Login";
import Register from "./Pages/Shared/Login/Register/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
