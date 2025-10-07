import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, WorkOrder } from '../lib/supabase';
import { Plus, Wrench } from 'lucide-react';

export function WorkOrders() {
  const { profile, user } = useAuth();
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent'
  });

  useEffect(() => {
    fetchWorkOrders();
  }, [profile]);

  const fetchWorkOrders = async () => {
    if (!profile?.property_id) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('work_orders')
        .select('*')
        .eq('property_id', profile.property_id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWorkOrders(data || []);
    } catch (error) {
      console.error('Error fetching work orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile?.property_id || !user) return;

    try {
      const { error } = await supabase.from('work_orders').insert({
        property_id: profile.property_id,
        submitted_by: user.id,
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        status: 'pending'
      });

      if (error) throw error;

      setShowForm(false);
      setFormData({ title: '', description: '', priority: 'medium' });
      fetchWorkOrders();
    } catch (error) {
      console.error('Error submitting work order:', error);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      in_progress: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-slate-100 text-slate-800';
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      low: 'text-green-600',
      medium: 'text-yellow-600',
      high: 'text-orange-600',
      urgent: 'text-red-600'
    };
    return colors[priority] || 'text-slate-600';
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Work Orders</h1>
        {profile?.property_id && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="h-5 w-5" />
            <span>New Work Order</span>
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Submit Work Order</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div className="flex space-x-3">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {workOrders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <Wrench className="h-16 w-16 mx-auto mb-4 text-slate-300" />
          <p className="text-slate-600">No work orders yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {workOrders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{order.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{order.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span className={`font-medium ${getPriorityColor(order.priority)}`}>
                      Priority: {order.priority}
                    </span>
                    <span>Created: {new Date(order.created_at).toLocaleDateString()}</span>
                    {order.assigned_to && <span>Assigned to: {order.assigned_to}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
