import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, WorkOrder, Payment } from '../lib/supabase';
import { FileText, DollarSign, Wrench, AlertCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardHome() {
  const { profile } = useAuth();
  const [stats, setStats] = useState({
    documents: 0,
    workOrders: 0,
    pendingPayments: 0,
    recentActivity: 0
  });
  const [recentWorkOrders, setRecentWorkOrders] = useState<WorkOrder[]>([]);
  const [recentPayments, setRecentPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, [profile]);

  const fetchDashboardData = async () => {
    if (!profile?.property_id) {
      setLoading(false);
      return;
    }

    try {
      const [documentsRes, workOrdersRes, paymentsRes] = await Promise.all([
        supabase
          .from('documents')
          .select('*', { count: 'exact', head: true })
          .or(`property_id.eq.${profile.property_id},is_public.eq.true`),
        supabase
          .from('work_orders')
          .select('*')
          .eq('property_id', profile.property_id)
          .order('created_at', { ascending: false })
          .limit(5),
        supabase
          .from('payments')
          .select('*')
          .eq('user_id', profile.id)
          .order('created_at', { ascending: false })
          .limit(5)
      ]);

      setStats({
        documents: documentsRes.count || 0,
        workOrders: workOrdersRes.data?.length || 0,
        pendingPayments: paymentsRes.data?.filter(p => p.status === 'pending').length || 0,
        recentActivity: (workOrdersRes.data?.length || 0) + (paymentsRes.data?.length || 0)
      });

      setRecentWorkOrders(workOrdersRes.data || []);
      setRecentPayments(paymentsRes.data || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { icon: FileText, label: 'Documents', value: stats.documents, color: 'blue' },
    { icon: Wrench, label: 'Work Orders', value: stats.workOrders, color: 'green' },
    { icon: DollarSign, label: 'Pending Payments', value: stats.pendingPayments, color: 'yellow' },
    { icon: TrendingUp, label: 'Recent Activity', value: stats.recentActivity, color: 'purple' }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      in_progress: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-slate-100 text-slate-800';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Welcome back, {profile?.first_name}!
        </h1>
        <p className="text-slate-600">Here's what's happening with your property</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 bg-${stat.color}-100 rounded-lg`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Work Orders</h2>
            <Link to="/dashboard/work-orders" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </Link>
          </div>

          {recentWorkOrders.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <Wrench className="h-12 w-12 mx-auto mb-3 text-slate-300" />
              <p>No work orders yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentWorkOrders.map((order) => (
                <div key={order.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900 mb-1">{order.title}</h3>
                    <p className="text-sm text-slate-600 mb-2">{order.description}</p>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Payment History</h2>
            <Link to="/dashboard/payments" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </Link>
          </div>

          {recentPayments.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <DollarSign className="h-12 w-12 mx-auto mb-3 text-slate-300" />
              <p>No payment history</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-slate-900">{payment.description}</h3>
                    <p className="text-sm text-slate-600">{new Date(payment.payment_date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900">${payment.amount.toFixed(2)}</div>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {!profile?.property_id && (
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1">Property Not Assigned</h3>
              <p className="text-yellow-800">
                Your account is not yet linked to a property. Please contact support to complete your setup.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
