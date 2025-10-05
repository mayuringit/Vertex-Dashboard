import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";

import Header from "./Layout/header";
import Sidebar from "./Layout/sidebar";

import ProtectedRoute from "./Components/ProtectedRoute";
import RoleProtectedRoute from "./Components/RoleProtectedRoute";

const LoginPage = lazy(() => import("./Pages/LoginPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const DashboardPage = lazy(() => import("./Pages/DashboardPage"));
const UsersPage = lazy(() => import("./Pages/UsersPage"));
const ReportsPage = lazy(() => import("./Pages/ReportsPage"));
const SettingsPage = lazy(() => import("./Pages/SettingsPage"));

function App() {
  const location = useLocation();
  const authPages = ["/login", "/register"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ height: 60, flexShrink: 0 }}>
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
          flexDirection: isAuthPage ? "column" : "row",
        }}
      >
        {!isAuthPage && <Sidebar />}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p: 3,
          }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            }
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/users"
                element={
                  <RoleProtectedRoute allowedRoles={["admin"]}>
                    <UsersPage />
                  </RoleProtectedRoute>
                }
              />

              <Route
                path="/reports"
                element={
                  <ProtectedRoute>
                    <ReportsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
}

export default App;