import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import NoAuthPage from "../pages/NoAuthPage";

const BasicLayout: React.FC = () => {
  const [isLogin] = useState(true);
  return (
    <div>
      {isLogin ? (
        <Suspense fallback={<div />}>
          <Outlet />
        </Suspense>
      ) : (
        <NoAuthPage />
      )}
    </div>
  );
};

export default BasicLayout;
