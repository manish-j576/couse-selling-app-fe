
import { Routes , Route } from "react-router-dom";
import { Hompage } from "../pages/Homepage";
import { AdminPage } from "../pages/AdminPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App
