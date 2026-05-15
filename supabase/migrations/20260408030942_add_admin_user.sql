/*
  # Add Admin User

  1. Authentication Setup
    - Create admin user with email and password authentication
    - Email: admin@supplychainapp.com
    - Password: Admin123!
  
  2. Enhanced Supplier Management
    - Add `last_order_date` to suppliers table
    - Add `total_orders` to suppliers table
    - Add `notes` field for additional supplier information
*/

-- Add new columns to suppliers table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'suppliers' AND column_name = 'last_order_date'
  ) THEN
    ALTER TABLE suppliers ADD COLUMN last_order_date timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'suppliers' AND column_name = 'total_orders'
  ) THEN
    ALTER TABLE suppliers ADD COLUMN total_orders integer DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'suppliers' AND column_name = 'notes'
  ) THEN
    ALTER TABLE suppliers ADD COLUMN notes text;
  END IF;
END $$;

-- Create admin user
DO $$
DECLARE
  user_exists boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM auth.users WHERE email = 'admin@supplychainapp.com'
  ) INTO user_exists;

  IF NOT user_exists THEN
    INSERT INTO auth.users (
      id,
      instance_id,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data,
      is_super_admin,
      role,
      aud,
      confirmation_token,
      recovery_token,
      email_change_token_new,
      email_change
    )
    VALUES (
      gen_random_uuid(),
      '00000000-0000-0000-0000-000000000000',
      'admin@supplychainapp.com',
      crypt('Admin123!', gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"],"role":"admin"}'::jsonb,
      '{"role":"admin","name":"Admin User"}'::jsonb,
      false,
      'authenticated',
      'authenticated',
      '',
      '',
      '',
      ''
    );
  END IF;
END $$;