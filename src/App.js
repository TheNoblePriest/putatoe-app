import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import EntryScreen from "./components/EntryScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wallet" element={<EntryScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
