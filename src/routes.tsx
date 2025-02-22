import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Views/App";
import Shifts_Table from "./Views/Shifts_Table";
import Guide from "./Views/Shifts-Table/Guide";
import PrivacyPolicy from "./Views/Shifts-Table/PrivacyPolicy";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} index/>
        <Route>
          <Route path="/Shifts-Table" element={<Shifts_Table/>}/>
          <Route path="/Shifts-Table/guide" element={<Guide/>}/>
          <Route path="/Shifts-Table/privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
