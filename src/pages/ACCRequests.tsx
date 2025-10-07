import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, ACCRequest } from '../lib/supabase';
import { Plus, ClipboardList } from 'lucide-react';

export function ACCRequests() {
  const { profile, user } = useAuth();
  const [requests, setRequests] = useState<ACCRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    request_type: ''
  });

  useEffect(() => {
    fetchRequests();
  }, [profile]);

  const fetchRequests = async () => {
    if (!profile?.property_id) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('acc_requests')
        .select('*')
        .eq('property_id', profile.property_id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      console.error('Error fetching ACC requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile?.property_id || !user) return;

    try {
      const { error } = await supabase.from('acc_requests').insert({
        property_id: profile.property_id,
        submitted_by: user.id,
        title: formData.title,
        description: formData.description,
        request_type: formData.request_type,
        status: 'pending'
      });

      if (error) throw error;

      setShowForm(false);
      setFormData({ title: '', description: '', request_type: '' });
      fetchRequests();
    } catch (error) {
      console.error('Error submitting ACC request:', error);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      needs_revision: 'bg-orange-100 text-orange-800'
    };
    return colors[status] || 'bg-slate-100 text-slate-800';
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">ACC Requests</h1>
        {profile?.property_id && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="h-5 w-5" />
            <span>New Request</span>
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Submit ACC Request</h2>
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
              <label className="block text-sm font-medium text-slate-700 mb-2">Request Type</label>
              <input
                type="text"
                value={formData.request_type}
                onChange={(e) => setFormData({ ...formData, request_type: e.target.value })}
                required
                placeholder="e.g., Exterior painting, landscaping, fence installation"
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

      {requests.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <ClipboardList className="h-16 w-16 mx-auto mb-4 text-slate-300" />
          <p className="text-slate-600">No ACC requests yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{request.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(request.status)}`}>
                      {request.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Type: {request.request_type}</p>
                  <p className="text-slate-700 mb-3">{request.description}</p>
                  <p className="text-sm text-slate-500">Submitted: {new Date(request.created_at).toLocaleDateString()}</p>
                  {request.review_notes && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm font-medium text-slate-700 mb-1">Review Notes:</p>
                      <p className="text-sm text-slate-600">{request.review_notes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
