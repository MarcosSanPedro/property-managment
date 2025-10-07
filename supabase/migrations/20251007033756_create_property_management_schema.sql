/*
  # Property Management System - Complete Database Schema

  ## Overview
  This migration creates the complete database schema for a property management company website.

  ## 1. New Tables

  ### profiles
  - `id` (uuid, FK to auth.users) - User profile ID
  - `role` (text) - User role: homeowner, board_member, admin
  - `first_name` (text) - User first name
  - `last_name` (text) - User last name
  - `phone` (text) - Contact phone number
  - `property_id` (uuid, FK to properties) - Associated property
  - `created_at` (timestamptz) - Profile creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### properties
  - `id` (uuid, PK) - Property ID
  - `name` (text) - Property name
  - `address` (text) - Street address
  - `city` (text) - City
  - `state` (text) - State
  - `zip` (text) - Zip code
  - `property_type` (text) - Type: condo, hoa, commercial
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### documents
  - `id` (uuid, PK) - Document ID
  - `title` (text) - Document title
  - `description` (text) - Document description
  - `file_url` (text) - Storage URL
  - `file_type` (text) - File MIME type
  - `category` (text) - Category: governing, financial, meeting_minutes, other
  - `property_id` (uuid, FK) - Associated property (null for public docs)
  - `is_public` (boolean) - Public visibility flag
  - `created_by` (uuid, FK) - Creator user ID
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### work_orders
  - `id` (uuid, PK) - Work order ID
  - `property_id` (uuid, FK) - Associated property
  - `submitted_by` (uuid, FK) - Submitter user ID
  - `title` (text) - Work order title
  - `description` (text) - Detailed description
  - `priority` (text) - Priority: low, medium, high, urgent
  - `status` (text) - Status: pending, in_progress, completed, cancelled
  - `assigned_to` (text) - Assigned contractor/vendor
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  - `completed_at` (timestamptz) - Completion timestamp

  ### acc_requests
  - `id` (uuid, PK) - ACC request ID
  - `property_id` (uuid, FK) - Associated property
  - `submitted_by` (uuid, FK) - Submitter user ID
  - `title` (text) - Request title
  - `description` (text) - Detailed description
  - `request_type` (text) - Type of architectural change
  - `status` (text) - Status: pending, approved, rejected, needs_revision
  - `reviewed_by` (uuid, FK) - Reviewer user ID
  - `review_notes` (text) - Review comments
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  - `reviewed_at` (timestamptz) - Review timestamp

  ### payments
  - `id` (uuid, PK) - Payment ID
  - `property_id` (uuid, FK) - Associated property
  - `user_id` (uuid, FK) - User ID
  - `amount` (numeric) - Payment amount
  - `description` (text) - Payment description
  - `payment_type` (text) - Type: assessment, fee, fine, other
  - `status` (text) - Status: pending, completed, failed
  - `payment_date` (timestamptz) - Payment date
  - `created_at` (timestamptz) - Creation timestamp

  ### contact_submissions
  - `id` (uuid, PK) - Submission ID
  - `first_name` (text) - Submitter first name
  - `last_name` (text) - Submitter last name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone
  - `service_interest` (text) - Service of interest
  - `message` (text) - Message content
  - `status` (text) - Status: new, contacted, converted, closed
  - `created_at` (timestamptz) - Submission timestamp

  ### testimonials
  - `id` (uuid, PK) - Testimonial ID
  - `client_name` (text) - Client name
  - `client_role` (text) - Client role/position
  - `property_name` (text) - Property name
  - `quote` (text) - Testimonial quote
  - `image_url` (text) - Client image URL
  - `rating` (integer) - Rating 1-5
  - `is_featured` (boolean) - Featured flag
  - `display_order` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### blog_posts
  - `id` (uuid, PK) - Post ID
  - `title` (text) - Post title
  - `slug` (text, unique) - URL slug
  - `excerpt` (text) - Short excerpt
  - `content` (text) - Full content
  - `author_id` (uuid, FK) - Author user ID
  - `category` (text) - Post category
  - `tags` (text[]) - Post tags
  - `featured_image_url` (text) - Featured image URL
  - `published` (boolean) - Published status
  - `published_at` (timestamptz) - Publication timestamp
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## 2. Security

  All tables have Row Level Security (RLS) enabled with appropriate policies:

  ### Profiles
  - Users can view their own profile
  - Users can update their own profile
  - Admins can view all profiles

  ### Properties
  - Authenticated users can view properties they're associated with
  - Admins can manage all properties

  ### Documents
  - Public documents visible to all
  - Property-specific documents visible to property members
  - Creators can manage their documents
  - Admins can manage all documents

  ### Work Orders
  - Users can view and create work orders for their property
  - Board members and admins can view and update all work orders for their properties

  ### ACC Requests
  - Users can view and create ACC requests for their property
  - Board members can review and approve requests
  - Admins can manage all requests

  ### Payments
  - Users can view their own payment history
  - Admins can view all payments

  ### Contact Submissions
  - Admins can view all submissions

  ### Testimonials
  - Public read access for featured testimonials
  - Admin write access

  ### Blog Posts
  - Public read access for published posts
  - Admin write access

  ## 3. Important Notes

  - All tables use UUID primary keys with gen_random_uuid()
  - Foreign keys reference auth.users for user relationships
  - Timestamps use timestamptz with DEFAULT now()
  - RLS policies ensure data isolation and security
  - Indexes added for frequently queried columns
*/

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  zip text NOT NULL,
  property_type text NOT NULL DEFAULT 'condo',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL DEFAULT 'homeowner',
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text,
  property_id uuid REFERENCES properties(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create documents table
CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  file_url text NOT NULL,
  file_type text NOT NULL,
  category text NOT NULL DEFAULT 'other',
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  is_public boolean DEFAULT false,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create work_orders table
CREATE TABLE IF NOT EXISTS work_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  submitted_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  priority text NOT NULL DEFAULT 'medium',
  status text NOT NULL DEFAULT 'pending',
  assigned_to text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE work_orders ENABLE ROW LEVEL SECURITY;

-- Create acc_requests table
CREATE TABLE IF NOT EXISTS acc_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  submitted_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  request_type text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  reviewed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  review_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  reviewed_at timestamptz
);

ALTER TABLE acc_requests ENABLE ROW LEVEL SECURITY;

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount numeric(10, 2) NOT NULL,
  description text NOT NULL,
  payment_type text NOT NULL DEFAULT 'assessment',
  status text NOT NULL DEFAULT 'pending',
  payment_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_interest text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text,
  property_name text,
  quote text NOT NULL,
  image_url text,
  rating integer DEFAULT 5,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  category text DEFAULT '',
  tags text[] DEFAULT '{}',
  featured_image_url text,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for properties
CREATE POLICY "Users can view their property"
  ON properties FOR SELECT
  TO authenticated
  USING (
    id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all properties"
  ON properties FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for documents
CREATE POLICY "Public documents are viewable by all"
  ON documents FOR SELECT
  USING (is_public = true);

CREATE POLICY "Property members can view property documents"
  ON documents FOR SELECT
  TO authenticated
  USING (
    property_id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
    )
  );

CREATE POLICY "Users can create documents"
  ON documents FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Admins can manage all documents"
  ON documents FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for work_orders
CREATE POLICY "Users can view work orders for their property"
  ON work_orders FOR SELECT
  TO authenticated
  USING (
    property_id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
    )
  );

CREATE POLICY "Users can create work orders for their property"
  ON work_orders FOR INSERT
  TO authenticated
  WITH CHECK (
    property_id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
    )
    AND auth.uid() = submitted_by
  );

CREATE POLICY "Board and admins can update work orders"
  ON work_orders FOR UPDATE
  TO authenticated
  USING (
    property_id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('board_member', 'admin')
    )
  );

-- RLS Policies for acc_requests
CREATE POLICY "Users can view ACC requests for their property"
  ON acc_requests FOR SELECT
  TO authenticated
  USING (
    property_id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
    )
  );

CREATE POLICY "Users can create ACC requests for their property"
  ON acc_requests FOR INSERT
  TO authenticated
  WITH CHECK (
    property_id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
    )
    AND auth.uid() = submitted_by
  );

CREATE POLICY "Board members can review ACC requests"
  ON acc_requests FOR UPDATE
  TO authenticated
  USING (
    property_id IN (
      SELECT property_id FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('board_member', 'admin')
    )
  );

-- RLS Policies for payments
CREATE POLICY "Users can view own payments"
  ON payments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all payments"
  ON payments FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can manage payments"
  ON payments FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for testimonials
CREATE POLICY "Featured testimonials are public"
  ON testimonials FOR SELECT
  USING (is_featured = true);

CREATE POLICY "Admins can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for blog_posts
CREATE POLICY "Published posts are public"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Admins can view all posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_property_id ON profiles(property_id);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_documents_property_id ON documents(property_id);
CREATE INDEX IF NOT EXISTS idx_documents_is_public ON documents(is_public);
CREATE INDEX IF NOT EXISTS idx_work_orders_property_id ON work_orders(property_id);
CREATE INDEX IF NOT EXISTS idx_work_orders_status ON work_orders(status);
CREATE INDEX IF NOT EXISTS idx_acc_requests_property_id ON acc_requests(property_id);
CREATE INDEX IF NOT EXISTS idx_acc_requests_status ON acc_requests(status);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);