CREATE DATABASE IF NOT EXISTS hotelmaria;

USE hotelmaria;

CREATE TABLE IF NOT EXISTS rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  images JSON,
  amenities JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room_id INT NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255),
  checkin_date DATE NOT NULL,
  checkout_date DATE NOT NULL,
  guests INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data for Rooms
INSERT INTO rooms (name, description, price, images, amenities) VALUES 
('Deluxe King Room', 'Spacious comfort with exceptional city views and modern amenities.', 8500.00, '["https://images.unsplash.com/photo-1611892440504-42a792e24d32"]', '["WiFi", "TV", "AC", "Mini-bar"]'),
('Executive Suite', 'Premium luxury featuring a separate living area and exclusive lounge access.', 15000.00, '["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"]', '["WiFi", "TV", "AC", "Mini-bar", "Lounge Access", "Bathtub"]'),
('Presidential Villa', 'Our finest accommodation offering unparalleled privacy and opulence.', 35000.00, '["https://images.unsplash.com/photo-1590490360182-c33d57733427"]', '["WiFi", "TV", "AC", "Private Pool", "Butler Service", "Ocean View"]');
