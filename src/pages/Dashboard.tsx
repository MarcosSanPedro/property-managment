import { useAuth } from '../contexts/AuthContext';
import { Home, FileText, CreditCard, ClipboardList, User, LogOut } from 'lucide-react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const menuItems = [
    { icon: Home, label: 'Overview', path: '/dashboard' },
    { icon: FileText, label: 'Documents', path: '/dashboard/documents' },
    { icon: CreditCard, label: 'Payments', path: '/dashboard/payments' },
    { icon: ClipboardList, label: 'Work Orders', path: '/dashboard/work-orders' },
    { icon: ClipboardList, label: 'ACC Requests', path: '/dashboard/acc-requests' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              {profile?.role === 'admin' ? 'Admin' : profile?.role === 'board_member' ? 'Board' : 'Homeowner'} Portal
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {profile?.first_name} {profile?.last_name}
            </p>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="absolute bottom-0 w-64 p-4 border-t border-slate-200">
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition w-full"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
