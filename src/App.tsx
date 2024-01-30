import React, { Suspense, lazy } from "react";
const BasicLayout = lazy(() => import("./layout"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div />}>
      <BasicLayout />
    </Suspense>
  );
};

export default App;
