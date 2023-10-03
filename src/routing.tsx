import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import type { FC } from "react";
import { Login } from "./pages/login";
import { Calculator } from "./pages/calculator";
import { History } from "./pages/history";
import { useAuth } from "./store/AuthContext";
import { PageWrapper } from "./pages/wrapper";

const Redirect: FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <PageWrapper>{children}</PageWrapper>
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
};

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/calculator"
          element={
            <Redirect>
              <Calculator />
            </Redirect>
          }
        />
        <Route
          path="/history"
          element={
            <Redirect>
              <History />
            </Redirect>
          }
        />
        <Route
          path="*"
          element={
            <Redirect>
              <Calculator />
            </Redirect>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
