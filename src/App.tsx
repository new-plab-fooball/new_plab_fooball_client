import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { GlobalStyle } from "./styles/global.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
