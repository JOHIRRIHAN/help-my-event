import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout এর ভেতরে সব রাউট গুলো রাখলাম */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default Route */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
