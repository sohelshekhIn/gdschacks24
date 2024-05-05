"use client";

import type { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

interface AuthContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData: User | null) => {
      if (userData) {
        setUser(userData);
        router.push("/");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
