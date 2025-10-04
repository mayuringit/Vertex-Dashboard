import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import RegisterPage from "./Pages/RegisterPage";
import { Box } from "@mui/material";
import Header from "./Layout/header";
import Sidebar from "./Layout/Sidebar";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflowX: 'hidden' }}>
      <Box sx={{ height: 60, flexShrink: 0 }}>
        <Header />
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, overflowY: 'auto', p: 3 }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;