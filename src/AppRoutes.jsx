import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HappyWishes from "./Components/HappyWishes";
import NewWishingPage from "./Components/wishing-page/new-wishing-page";
import MyWishingPages from "./Components/wishing-page/my-pages";
import EditWishingPage from "./Components/wishing-page/edit-wishing-page";
import CeciliaMaryBabu from "./Components/wishing-page/cecilia-mary-babu/cecilia-mary-babu";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
