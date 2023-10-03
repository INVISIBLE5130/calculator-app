import { createContext, useContext, useState, type ReactNode } from "react";
import { emailCheck, usernameCheck } from "../helpers/validations";

interface UserData {
  username: string;
  email: string;
}

interface AuthContextType {
  user: UserData | null;
  isLoggedIn: boolean;
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (userData: UserData) => {
    const check =
      usernameCheck(userData.username) && emailCheck(userData.email);

    setUser(userData);
    setIsLoggedIn(check);
    
    return check;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const authContextValue: AuthContextType = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
