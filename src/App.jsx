
import { Routes , Route } from "react-router-dom";
import { Hompage } from "../pages/Homepage";
import { AdminPage } from "../pages/AdminPage";
import { Preview } from "../pages/Preview";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/preview" element={<Preview />}></Route>
    </Routes>
  );
}

export default App
