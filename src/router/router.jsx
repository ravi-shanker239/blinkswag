import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { dashBoard } from "./routes";
import DashboardLayout from "../layout/dashboard-layout/dashboard-layout";
export default function Router() {

    return (
        <>
            <Routes>
                {/* {appRoutes.map((_v, _i) => {
        return (
          <Route
              key={_i}
              path={_v.path}
              exact
              element={<Layout children={_v.component} flag={_v.flag} />}
            />
          );
        })} */}
                {dashBoard.map((_v, _i) => {
                    return (
                        <Route
                            key={_i}
                            path={_v.path}
                            exact
                            //   element={<ProtectedRoute children={_v.component} logged={isLogged} />}
                            element={<ProtectedRoute children={_v.component} />}
                        />
                    );
                })}
                {/* <Route path="/*" element={<Layout children={<Page404 />} />} /> */}
            </Routes>
        </>
    );
}

const ProtectedRoute = ({ children, logged }) => {
    if (!logged) {
        return <DashboardLayout children={children} />
    }
    return <Navigate to="/login" replace />;
};