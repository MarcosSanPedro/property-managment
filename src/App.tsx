import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Resources } from './pages/Resources';
// Auth pages removed per requirements
import { Dashboard } from './pages/Dashboard';
import { DashboardHome } from './pages/DashboardHome';
import { Documents } from './pages/Documents';
import { Payments } from './pages/Payments';
import { WorkOrders } from './pages/WorkOrders';
import { ACCRequests } from './pages/ACCRequests';
import { Profile } from './pages/Profile';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />

          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />

          <Route path="/services" element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          } />

          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/resources" element={
            <>
              <Header />
              <Resources />
              <Footer />
            </>
          } />

          {/* Blog page removed */}

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardHome />} />
            <Route path="documents" element={<Documents />} />
            <Route path="payments" element={<Payments />} />
            <Route path="work-orders" element={<WorkOrders />} />
            <Route path="acc-requests" element={<ACCRequests />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/privacy" element={
            <>
              <Header />
              <Privacy />
              <Footer />
            </>
          } />

          <Route path="/terms" element={
            <>
              <Header />
              <Terms />
              <Footer />
            </>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
