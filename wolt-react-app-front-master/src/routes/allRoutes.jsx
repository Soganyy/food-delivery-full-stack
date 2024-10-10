import { Navigate } from "react-router-dom";

import LandingPage from "../components/pages/Landing/LandingPage";
import MerchantLogin from "../components/pages/Merchant/MerchantLogin/MerchantLogin";

const authProtectedRoutes = [];

const publicRoutes = [
  // Authentication Page
  { path: "/", component: <LandingPage /> },
  { path: "/login-merchant", component: <MerchantLogin /> },
];

export { authProtectedRoutes, publicRoutes };
