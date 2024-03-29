import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Singup';
import Signin from '../pages/Signin';
import AdminDashboard from '../pages/AdminDashboard';
// import ProjectsForm from '../components/ProjectsForm';
import EventForm from '../components/EventsForm';

export const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<EventForm />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    );
  };

