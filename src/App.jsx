import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import CalculatorPage from "./pages/CalculatorPage/CalculatorPage";
import NonExistingPage from "./pages/NonExistingPage/NonExistingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NonExistingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
