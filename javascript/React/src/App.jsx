import { BrowserRouter, Routes, Route } from "react-router-dom"; // npm i -D react-router-dom

import Index from "./pages/index";
import UseContextPage from "./pages/useContextPage";
import ReduxPage from "./pages/ReduxPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/usecontext" element={<UseContextPage />} />
        <Route path="/redux" element={<ReduxPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
