import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HappyWishes() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/wishme/cecilia-mary-babu");
  }, [navigate]);

  return null; // or you could return a loading indicator here
}

export default HappyWishes;
