import React from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import { Foo, Bar } from "../pages/index";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "foo",
        element: <Foo />,
      },
      {
        path: "bar",
        element: <Bar />,
      },
    ],
  },
];

export { routes };

export default createBrowserRouter(routes);
