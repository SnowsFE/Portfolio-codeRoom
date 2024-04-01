import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/infopage/InfoPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InfoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
