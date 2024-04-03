import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/infopage/InfoPage";
import LoginPage from "./pages/loginpage/LoginPage";
import JoinPage from "./pages/loginpage/JoinPage";
import DetailPage from "./pages/detailpage/DetailPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InfoPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
