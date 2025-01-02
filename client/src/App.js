import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Router>
      <Header />
      <Homepage />
    </Router>
  );
}

export default App;
