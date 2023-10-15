import {BrowserRouter, Routes, Route} from "react-router-dom"

import Dashboard from "./view/Dashboard";

/**
 * React Router Mentioned Here
 */
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" Component={Dashboard}/>
          </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
