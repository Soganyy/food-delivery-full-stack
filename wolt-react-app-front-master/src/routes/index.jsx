import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout.jsx";

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes.jsx";
import AuthProtected from "./AuthProtected.jsx";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={<NonAuthLayout>{route.component}</NonAuthLayout>} key={idx} />
          ))}
        </Route>

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route path={route.path} element={<AuthProtected></AuthProtected>} key={idx} />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;
