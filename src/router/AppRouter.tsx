import { Route, Routes } from 'react-router-dom';

import {AuthRoutes} from "../auth/routes/AuthRoutes"
import { ChatRoutes } from '../chat/routes/ChatRoutes';


export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* Chat */}
        <Route path="/*" element={ <ChatRoutes /> } />

    </Routes>
  )
}
