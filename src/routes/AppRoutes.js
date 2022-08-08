import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '../routes/PublicRoutes';
import { MainChat } from '../Pages/MainChat';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<MainChat />} />
        <Route path="/admin/*" element={<PublicRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
