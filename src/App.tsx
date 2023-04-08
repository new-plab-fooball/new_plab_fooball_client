import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Accounts from "./pages/accounts";
import Home from "./pages/home";
import MyPage from "./pages/mypage";
import Payments from "./pages/payments";
import { GlobalStyle } from "./styles/common/global.style";
import "./public.css"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/accounts/*" element={<Accounts />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/payment/*" element={<Payments />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
