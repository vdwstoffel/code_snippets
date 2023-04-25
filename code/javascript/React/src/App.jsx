import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormExample from "./components/FormExample";
import FormPassingData from "./components/FormPassingData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/formexample" element={<FormExample />} />
        <Route path="/formpassingdata" element={<FormPassingData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
