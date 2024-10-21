import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HappyWishes() {
  return <div>
    <Link to="/wishing/new "> New Wishing Page</Link>
    <Link to="/wishing/my-pages "> My Pages</Link>
  </div>;
}

export default HappyWishes;
