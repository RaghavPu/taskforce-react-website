import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Webpages/Home";
import Progress from "./Webpages/Progress";
import Developers from "./Webpages/Developers";
import Resources from "./Webpages/Resources";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="progress" element={<Progress />} />
          <Route path="developers" element={<Developers />} />
          <Route path="resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
