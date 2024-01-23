import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home/pages/Home"

function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home></Home>}
        >
        </Route>
      </Routes>
    </>
  );
}

export default App;
