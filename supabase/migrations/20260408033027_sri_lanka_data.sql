

-- Insert Sri Lankan Suppliers
INSERT INTO suppliers (name, contact_person, email, phone, address, status, rating, total_orders, notes)
VALUES
  ('Cargills Ceylon PLC', 'Ranjith Fernando', 'procurement@cargillsceylon.com', '+94 11 2333333', '40 York Street, Colombo 01', 'active', 4.8, 145, 'Leading food and beverage distributor in Sri Lanka'),
  ('Fonterra Brands Lanka', 'Sunil Perera', 'sales@fonterra.lk', '+94 11 2446600', '100 Norris Canal Road, Colombo 10', 'active', 4.9, 128, 'Premium dairy products supplier, Anchor brand'),
  ('Maliban Biscuit Manufactories', 'Chaminda Silva', 'orders@maliban.com', '+94 11 2433221', 'Maliban Street, Ratmalana', 'active', 4.7, 167, 'Largest biscuit manufacturer in Sri Lanka'),
  ('CBL Foods International', 'Nimal Jayasinghe', 'contact@cblfoods.com', '+94 31 2292292', 'Pannala, Kurunegala', 'active', 4.6, 89, 'Producer of Tipi Tip, Wijaya products'),
  ('Nestlé Lanka PLC', 'Dilshan Perera', 'info@nestle.lk', '+94 11 4605000', '440 Grandpass Road, Colombo 14', 'active', 4.9, 201, 'Multinational food and beverage company'),
  ('Elephant House', 'Sampath Wickramasinghe', 'sales@elephanthouse.lk', '+94 11 2461461', 'Biyagama Road, Kelaniya', 'active', 4.5, 112, 'Leading soft drink and ice cream manufacturer'),
  ('Kotmale Holdings PLC', 'Pradeep Kumara', 'info@kotmaleholdings.com', '+94 52 2230435', 'Werellagama, Kotmale', 'active', 4.8, 156, 'Highland dairy products, fresh milk supplier'),
  ('Prima Ceylon Limited', 'Mahesh Rodrigo', 'sales@primaceylon.com', '+94 11 2691691', '24 Leyden Bastian Road, Colombo 01', 'active', 4.7, 134, 'Prima flour and bakery products'),
  ('Raigam Wayamba Salterns', 'Anura Gunawardena', 'contact@raigam.lk', '+94 31 2249999', 'Pannala, Wayamba', 'active', 4.6, 98, 'Raigam brand spices, salt, and seasonings'),
  ('CIC Agri Businesses', 'Kapila Jayawardena', 'agri@cic.lk', '+94 11 2446800', 'No. 199, Kew Road, Colombo 02', 'active', 4.7, 143, 'Rice, grains, and agricultural products')
ON CONFLICT DO NOTHING;

-- Insert  Products with Sri Lankan Rupees (LKR) prices
INSERT INTO inventory (supplier_id, product_name, sku, quantity, unit_price, reorder_level, last_restock_date)
SELECT
  s.id,
  p.product_name,
  p.sku,
  p.quantity,
  p.unit_price,
  p.reorder_level,
  NOW() - (random() * interval '30 days')
FROM suppliers s
CROSS JOIN (
  VALUES
    ('Fonterra Brands Lanka', 'Anchor Full Cream Milk Powder 400g', 'DAIRY-ANCR-001', 850, 1250.00, 100),
    ('Fonterra Brands Lanka', 'Anchor Fresh Milk 1L', 'DAIRY-ANCR-002', 1200, 420.00, 200),
    ('Kotmale Holdings PLC', 'Kotmale Fresh Milk 1L', 'DAIRY-KOTM-001', 980, 410.00, 150),
    ('Kotmale Holdings PLC', 'Kotmale Yoghurt 80g Cup', 'DAIRY-KOTM-002', 650, 85.00, 100),

    ('Maliban Biscuit Manufactories', 'Maliban Gold Marie Biscuits 400g', 'BISC-MALB-001', 1500, 320.00, 200),
    ('Maliban Biscuit Manufactories', 'Maliban Chocolate Cream Biscuits 200g', 'BISC-MALB-002', 1100, 280.00, 150),
    ('Maliban Biscuit Manufactories', 'Maliban Lemon Puff 200g', 'BISC-MALB-003', 890, 250.00, 120),

    ('Nestlé Lanka PLC', 'Maggi Noodles Chicken 77g', 'FOOD-NEST-001', 2500, 115.00, 300),
    ('Nestlé Lanka PLC', 'Milo Active Go 400g', 'FOOD-NEST-002', 780, 1180.00, 100),
    ('Nestlé Lanka PLC', 'Nespray Full Cream Milk Powder 400g', 'DAIRY-NEST-001', 620, 1150.00, 80),

    ('Prima Ceylon Limited', 'Prima Flour 1kg', 'FLOUR-PRIM-001', 1800, 290.00, 250),
    ('Prima Ceylon Limited', 'Prima Bread Crumbs 250g', 'FLOUR-PRIM-002', 450, 180.00, 80),
    ('Prima Ceylon Limited', 'Prima Sago 500g', 'FLOUR-PRIM-003', 520, 220.00, 100),

    ('Elephant House', 'Elephant House Ginger Beer 400ml', 'BEVG-ELPH-001', 1400, 150.00, 200),
    ('Elephant House', 'Elephant House Cream Soda 400ml', 'BEVG-ELPH-002', 1350, 150.00, 200),
    ('Elephant House', 'Elephant House Necto 400ml', 'BEVG-ELPH-003', 1250, 150.00, 180),

    ('CIC Agri Businesses', 'CIC Basmati Rice 5kg', 'RICE-CIC-001', 680, 2450.00, 100),
    ('CIC Agri Businesses', 'CIC Samba Rice 5kg', 'RICE-CIC-002', 920, 1850.00, 120),
    ('CIC Agri Businesses', 'CIC Red Rice 1kg', 'RICE-CIC-003', 580, 395.00, 100),

    ('CBL Foods International', 'Tipi Tip Tomato Sauce 400g', 'SAUC-CBL-001', 1100, 320.00, 150),
    ('CBL Foods International', 'Tipi Tip Chili Sauce 400g', 'SAUC-CBL-002', 890, 310.00, 120),
    ('CBL Foods International', 'Wijaya Curry Powder 100g', 'SPIC-CBL-001', 1450, 185.00, 200),

    ('Raigam Wayamba Salterns', 'Raigam Salt 400g', 'SALT-RAIG-001', 2100, 120.00, 300),
    ('Raigam Wayamba Salterns', 'Raigam Chili Powder 100g', 'SPIC-RAIG-001', 980, 195.00, 150),
    ('Raigam Wayamba Salterns', 'Raigam Pepper Powder 50g', 'SPIC-RAIG-002', 750, 285.00, 120),

    ('Cargills Ceylon PLC', 'Cargills Basmati Rice 1kg', 'RICE-CARG-001', 850, 520.00, 120),
    ('Cargills Ceylon PLC', 'Cargills White Sugar 1kg', 'SUGR-CARG-001', 1500, 285.00, 200),
    ('Cargills Ceylon PLC', 'Cargills Premium Tea 200g', 'TEA-CARG-001', 680, 650.00, 100)
) AS p(supplier_name, product_name, sku, quantity, unit_price, reorder_level)
WHERE s.name = p.supplier_name;

-- Insert Sample Analytics Data 
INSERT INTO analytics (metric_name, metric_value, metric_date, category)
VALUES
  ('Daily Revenue', 4850000, CURRENT_DATE - INTERVAL '1 day', 'Revenue'),
  ('Daily Revenue', 5120000, CURRENT_DATE - INTERVAL '2 days', 'Revenue'),
  ('Daily Revenue', 4680000, CURRENT_DATE - INTERVAL '3 days', 'Revenue'),
  ('Daily Revenue', 5350000, CURRENT_DATE - INTERVAL '4 days', 'Revenue'),
  ('Daily Revenue', 5890000, CURRENT_DATE - INTERVAL '5 days', 'Revenue'),
  ('Daily Revenue', 6240000, CURRENT_DATE - INTERVAL '6 days', 'Revenue'),
  ('Daily Revenue', 5950000, CURRENT_DATE - INTERVAL '7 days', 'Revenue'),

  ('Inventory Turnover', 8.5, CURRENT_DATE, 'Efficiency'),
  ('Supplier Performance', 92.3, CURRENT_DATE, 'Quality'),
  ('Order Fulfillment Rate', 96.8, CURRENT_DATE, 'Operations'),
  ('Stock Out Rate', 2.1, CURRENT_DATE, 'Inventory'),
  ('Average Order Value', 4250, CURRENT_DATE, 'Sales'),
  ('Customer Satisfaction', 4.6, CURRENT_DATE, 'Customer Service'),
  ('On-Time Delivery', 94.5, CURRENT_DATE, 'Logistics')
ON CONFLICT DO NOTHING;

-- Insert Forecasting Data
INSERT INTO forecasting (product_id, forecast_date, predicted_demand, confidence_level)
SELECT
  i.id,
  CURRENT_DATE + (seq * INTERVAL '1 day'),
  CASE
    WHEN i.product_name LIKE '%Milk%' THEN 200 + (random() * 50)::numeric
    WHEN i.product_name LIKE '%Rice%' THEN 150 + (random() * 40)::numeric
    WHEN i.product_name LIKE '%Biscuit%' THEN 180 + (random() * 45)::numeric
    WHEN i.product_name LIKE '%Sauce%' THEN 120 + (random() * 30)::numeric
    ELSE 100 + (random() * 25)::numeric
  END,
  0.75 + (random() * 0.20)
FROM inventory i
CROSS JOIN generate_series(1, 7) AS seq
ON CONFLICT DO NOTHING;

-- Update supplier last order dates
UPDATE suppliers
SET last_order_date = NOW() - (random() * interval '15 days')
WHERE last_order_date IS NULL;
