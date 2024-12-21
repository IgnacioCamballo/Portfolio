import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Views/App";
import Shifts_Table from "./Views/Shifts_Table";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} index/>
        <Route>
          <Route path="/Shifts-Table" element={<Shifts_Table/>} index/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
