import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import routes from "./routes";
import { map } from "lodash";
export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
