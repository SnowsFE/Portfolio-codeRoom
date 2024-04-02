import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/infopage/InfoPage";
import LoginPage from "./pages/loginpage/LoginPage";
import JoinPage from "./pages/loginpage/JoinPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InfoPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
