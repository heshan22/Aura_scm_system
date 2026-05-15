/*
  # Supply Chain Management Schema

  1. New Tables
    - `suppliers` - Store supplier information
      - `id` (uuid, primary key)
      - `name` (text)
      - `contact_person` (text)
      - `email` (text)
      - `phone` (text)
      - `address` (text)
      - `status` (text) - active/inactive
      - `rating` (numeric)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `inventory` - Track inventory items
      - `id` (uuid, primary key)
      - `supplier_id` (uuid, foreign key)
      - `product_name` (text)
      - `sku` (text, unique)
      - `quantity` (integer)
      - `unit_price` (numeric)
      - `reorder_level` (integer)
      - `last_restock_date` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `analytics` - Store analytics data
      - `id` (uuid, primary key)
      - `metric_name` (text)
      - `metric_value` (numeric)
      - `metric_date` (date)
      - `category` (text)
      - `created_at` (timestamptz)
    
    - `forecasting` - Demand forecasting data
      - `id` (uuid, primary key)
      - `product_id` (uuid)
      - `forecast_date` (date)
      - `predicted_demand` (numeric)
      - `confidence_level` (numeric)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their data
*/

-- Create suppliers table
CREATE TABLE IF NOT EXISTS suppliers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact_person text,
  email text,
  phone text,
  address text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  rating numeric(3,2) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create inventory table
CREATE TABLE IF NOT EXISTS inventory (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id uuid REFERENCES suppliers(id) ON DELETE SET NULL,
  product_name text NOT NULL,
  sku text UNIQUE NOT NULL,
  quantity integer DEFAULT 0 CHECK (quantity >= 0),
  unit_price numeric(10,2) DEFAULT 0 CHECK (unit_price >= 0),
  reorder_level integer DEFAULT 10 CHECK (reorder_level >= 0),
  last_restock_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create analytics table
CREATE TABLE IF NOT EXISTS analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name text NOT NULL,
  metric_value numeric NOT NULL,
  metric_date date DEFAULT CURRENT_DATE,
  category text,
  created_at timestamptz DEFAULT now()
);

-- Create forecasting table
CREATE TABLE IF NOT EXISTS forecasting (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES inventory(id) ON DELETE CASCADE,
  forecast_date date NOT NULL,
  predicted_demand numeric NOT NULL CHECK (predicted_demand >= 0),
  confidence_level numeric(3,2) CHECK (confidence_level >= 0 AND confidence_level <= 1),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE forecasting ENABLE ROW LEVEL SECURITY;

-- Suppliers policies
CREATE POLICY "Authenticated users can view suppliers"
  ON suppliers FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert suppliers"
  ON suppliers FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update suppliers"
  ON suppliers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete suppliers"
  ON suppliers FOR DELETE
  TO authenticated
  USING (true);

-- Inventory policies
CREATE POLICY "Authenticated users can view inventory"
  ON inventory FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert inventory"
  ON inventory FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update inventory"
  ON inventory FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete inventory"
  ON inventory FOR DELETE
  TO authenticated
  USING (true);

-- Analytics policies
CREATE POLICY "Authenticated users can view analytics"
  ON analytics FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert analytics"
  ON analytics FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update analytics"
  ON analytics FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete analytics"
  ON analytics FOR DELETE
  TO authenticated
  USING (true);

-- Forecasting policies
CREATE POLICY "Authenticated users can view forecasting"
  ON forecasting FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert forecasting"
  ON forecasting FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update forecasting"
  ON forecasting FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete forecasting"
  ON forecasting FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_suppliers_status ON suppliers(status);
CREATE INDEX IF NOT EXISTS idx_inventory_supplier_id ON inventory(supplier_id);
CREATE INDEX IF NOT EXISTS idx_inventory_sku ON inventory(sku);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics(metric_date);
CREATE INDEX IF NOT EXISTS idx_forecasting_product_id ON forecasting(product_id);
CREATE INDEX IF NOT EXISTS idx_forecasting_date ON forecasting(forecast_date);