import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { SurveyProvider } from './context/SurveyContext';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Assessment from './pages/Assessment';
import Cycles from './pages/admin/Cycles';
import Assessments from './pages/admin/Assessments';
import ReviewDashboard from './pages/assessor/ReviewDashboard';
import ReviewAssessment from './pages/assessor/ReviewAssessment';
import EntityReport from './pages/reports/EntityReport';
import NationalReport from './pages/reports/NationalReport';
import { ExcellenceProvider } from './context/ExcellenceContext';
import JuryDashboard from './pages/jury/JuryDashboard';
import VotingSession from './pages/jury/VotingSession';
import AuditLogs from './pages/admin/AuditLogs';
import Users from './pages/admin/Users';
import ReportsOverview from './pages/admin/ReportsOverview';
import ExecutiveInsights from './pages/executive/ExecutiveInsights';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <SurveyProvider>
            <ExcellenceProvider>
              <Routes>
                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}
                <Route path="/" element={
                  <ProtectedRoute>
                    <MainLayout />
                  </ProtectedRoute>
                }>
                  <Route index element={<Dashboard />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/cycles" element={<Cycles />} />
                  <Route path="/assessments" element={<Assessments />} />
                  <Route path="/audit-logs" element={<AuditLogs />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/reviews" element={<ReviewDashboard />} />
                  <Route path="/review/:submissionId" element={<ReviewAssessment />} />
                  <Route path="/reports" element={<ReportsOverview />} />
                  <Route path="/reports/:entityId" element={<EntityReport />} />
                  <Route path="/strategic-insights" element={<ExecutiveInsights />} />
                  <Route path="/national-reports" element={<NationalReport />} />
                  <Route path="/jury" element={<JuryDashboard />} />
                  <Route path="/jury/vote/:categoryId" element={<VotingSession />} />
                  <Route path="*" element={<div className="p-10">Page Under Construction</div>} />
                </Route>
              </Routes>
            </ExcellenceProvider>
          </SurveyProvider>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;
