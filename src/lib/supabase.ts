import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  role: 'homeowner' | 'board_member' | 'admin';
  first_name: string;
  last_name: string;
  phone: string | null;
  property_id: string | null;
  created_at: string;
  updated_at: string;
};

export type Property = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  property_type: 'condo' | 'hoa' | 'commercial';
  created_at: string;
  updated_at: string;
};

export type WorkOrder = {
  id: string;
  property_id: string;
  submitted_by: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  assigned_to: string | null;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
};

export type ACCRequest = {
  id: string;
  property_id: string;
  submitted_by: string;
  title: string;
  description: string;
  request_type: string;
  status: 'pending' | 'approved' | 'rejected' | 'needs_revision';
  reviewed_by: string | null;
  review_notes: string | null;
  created_at: string;
  updated_at: string;
  reviewed_at: string | null;
};

export type Document = {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_type: string;
  category: 'governing' | 'financial' | 'meeting_minutes' | 'other';
  property_id: string | null;
  is_public: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
};

export type Payment = {
  id: string;
  property_id: string;
  user_id: string;
  amount: number;
  description: string;
  payment_type: 'assessment' | 'fee' | 'fine' | 'other';
  status: 'pending' | 'completed' | 'failed';
  payment_date: string;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_role: string | null;
  property_name: string | null;
  quote: string;
  image_url: string | null;
  rating: number;
  is_featured: boolean;
  display_order: number;
  created_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_id: string | null;
  category: string;
  tags: string[];
  featured_image_url: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};
