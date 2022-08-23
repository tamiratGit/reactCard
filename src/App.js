import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Fullcard from "./components/Fullcard";
import Error from "./components/Error";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/cards/:userid" element={<Fullcard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
