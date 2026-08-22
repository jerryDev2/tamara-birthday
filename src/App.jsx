import React from "react";
import Herosection from "./Component/Herosection.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SecondPage from "./Component/SecondPage.jsx";
import ThirdPage from "./Component/ThirdPage.jsx";
import Header from "./Component/Header.jsx";
import FouthPage from "./Component/FouthPage.jsx";
import FifthPage from "./Component/FifthPage.jsx";
import SixthPage from "./Component/SixthPage.jsx";

const pageLinks = [
  { label: "1", path: "/" },
  { label: "2", path: "/second-page" },
  { label: "3", path: "/third-page" },
  { label: "4", path: "/fouth-page" },
  { label: "5", path: "/fifth-page" },
  { label: "6", path: "/sixth-page" },
];

function PagePagination() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-lg backdrop-blur-sm">
      {pageLinks.map((page) => {
        const isActive = location.pathname === page.path;

        return (
          <button
            key={page.path}
            type="button"
            onClick={() => navigate(page.path)}
            className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold transition-all duration-200 ${
              isActive
                ? "border-[#ff7ed8] bg-[#ff7ed8] text-white shadow-md"
                : "border-[#ff7ed8] bg-white text-[#2c0e55] hover:scale-105"
            }`}
            aria-label={`Go to page ${page.label}`}
          >
            {page.label}
          </button>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/third-page" element={<ThirdPage />} />
          <Route path="/fouth-page" element={<FouthPage />} />
          <Route path="/fifth-page" element={<FifthPage />} />
          <Route path="/sixth-page" element={<SixthPage />} />
        </Routes>
        <PagePagination />
      </BrowserRouter>
    </div>
  );
}

export default App;
