import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Router  Redirect to="/" >
        <div className="app">

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/"    element={  <>  {" "}  <Home/>  <Footer/>{" "}  </> } />
            <Route path="/tradingpage" element={   <>{" "}  <Home/>  <Footer/>{" "} </> } />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
