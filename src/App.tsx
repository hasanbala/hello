import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hello } from "./pages/helloWidget/hello/hello";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  );
};
