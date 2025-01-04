import { ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectRoutesProps {
    children: ReactNode;
}
export const ProtectRoutes = ({children}:ProtectRoutesProps) => {
    const token = localStorage.getItem("token");
    if (!token){
        return <Navigate to="/auth/login" replace />;
    }

    return (
        <div>
            {children}
        </div>
    );
};

