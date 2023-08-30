import { Routes, Route } from "react-router-dom";
import { Search, SearchResult } from "./pages";
import "./styles/app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/searchResult" element={<SearchResult />} />
    </Routes>
  );
}

export default App;
