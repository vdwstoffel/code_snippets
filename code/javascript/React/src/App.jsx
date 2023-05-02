import { BrowserRouter, Routes, Route } from "react-router-dom";

import FunctionComponent from "./components/FunctionComponent"
import PropsExample from './components/PropsExample'
import Conditionals from "./components/Conditionals";
import Loops from "./components/Loops";
import FormExample from "./components/FormExample";
import FormPassingData from "./components/FormPassingData";
import Counter from "./components/useStateExample";
import CustomHooks from "./components/CustomHooks";
import SWMovies from "./components/useEffectExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/component" element={<FunctionComponent />} />
        <Route path="/props" element={<PropsExample title={'Hello from props'} />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/loops" element={<Loops />} />
        <Route path="/formexample" element={<FormExample />} />
        <Route path="/formpassingdata" element={<FormPassingData />} />
        <Route path='/usestateexample' element={<Counter />} />
        <Route path='/customhooks' element={<CustomHooks />} />
        <Route path='/useeffect' element={<SWMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
