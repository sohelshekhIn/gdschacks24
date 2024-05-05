import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAuth();
  const router = useRouter();

  if (!user?.user) {
    router.push("/login");
    return null;
  }
  return children;
};

export default ProtectedRoute;
