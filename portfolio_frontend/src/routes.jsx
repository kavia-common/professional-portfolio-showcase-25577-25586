import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import TakeThisJobs907315 from './pages/TakeThisJobs907315';
import JobsDetailOpen907267 from './pages/JobsDetailOpen907267';
import Profile907374 from './pages/Profile907374';

/**
 * PUBLIC_INTERFACE
 * Provides app-level routing and a minimal navigation bar linking the three asset pages.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <nav style={{
        display: 'flex',
        gap: '12px',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        background: '#ffffff',
        zIndex: 2
      }}>
        <Link to="/take-this-jobs">Take this jobs</Link>
        <Link to="/jobs-detail-open">Jobs Detail - Open</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/take-this-jobs" replace />} />
        <Route path="/take-this-jobs" element={<TakeThisJobs907315 />} />
        <Route path="/jobs-detail-open" element={<JobsDetailOpen907267 />} />
        <Route path="/profile" element={<Profile907374 />} />
        <Route path="*" element={<Navigate to="/take-this-jobs" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
