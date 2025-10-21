import Header from "./components/layout/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
