import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminEventForm from '../components/AdminEventForm';

export const Routing = () => {
    return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<Signin />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/form" element={<AdminEventForm />} />
          {/* <Route path="/admindashboard" element={<AdminDashboard />} /> */}
        </Routes>
      </Router>
    );
  };

