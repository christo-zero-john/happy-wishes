import { BrowserRouter, Routes, Route } from "react-router-dom";
import HappyWishes from "./Components/HappyWishes";
import NewWishingPage from "./Components/wishing-page/new-wishing-page";
import MyWishingPages from "./Components/wishing-page/my-pages";
import EditWishingPage from "./Components/wishing-page/edit-wishing-page";
import CeciliaMaryBabu from "./Components/wishing-page/cecilia-mary-babu/cecilia-mary-babu";
import TextEffectParticles from "./Components/text-effects/text-effect-particles";
import TextEffectGlow from "./Components/text-effects/text-effect-glow";
import HomePageLoading from "./Components/loading/home-page-loading";

function AppRoutes() {
  return (
    <div className="en-Oxanium">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HappyWishes />} />
          <Route path="/create/wishing" element={<NewWishingPage />} />
          <Route path="/wishing/my-pages" element={<MyWishingPages />} />
          <Route
            path="/wishing/my-pages/edit/:id"
            element={<EditWishingPage />}
          />
          <Route path="/wishme/:pageId" element={<CeciliaMaryBabu />} />
          <Route path="/hpl" element={<HomePageLoading message="Loading..."/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
