import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminUser from "./components/AdminUser/index";
import ReadUser from "./components/ReadUser/index";
import CreateUser from "./components/CreateUser/index";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminUser/>} />
      <Route path="/read" element={<ReadUser/>} />
      <Route path="/create" element={<CreateUser/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
