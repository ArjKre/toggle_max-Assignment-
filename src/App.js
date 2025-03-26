import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-right">
          <Navbar />
          <div className="flex-bottom">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
