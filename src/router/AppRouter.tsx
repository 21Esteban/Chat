import {  Route, Routes } from "react-router-dom";
import { ChatRoutes } from "../chat/routes/ChatRoutes";
import { ProtectRoutes } from "../protectRoutes/protectRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
        <Route path="auth/*" element={<AuthRoutes />} />

      {/* Chat */}  
      <Route
        path="/*"
        element={
          <ProtectRoutes>
            <ChatRoutes />
          </ProtectRoutes>
        }
      />
    </Routes>
  );
};
