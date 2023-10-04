import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router";

import Navbar from "./Pages/Home/Navbar";
import Articales from "./Pages/Articles/Articales";
import Pages from "./Pages/Pages/Pages";
import Pricing from "./Pages/Pricing/Pricing";
import Signup from "./Pages/SignUp/Signup";
import Faq from "./Pages/Faq/Faq";
import Login from "./Pages/Login/login";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articales />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
