import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
