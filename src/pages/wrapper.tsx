import { FC, ReactNode } from "react";
import Header from "../sections/header";

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
