CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  email_verified BOOLEAN,
  creation_date DATE
);

CREATE TABLE "transaction" (
  id SERIAL PRIMARY KEY,
  date TIMESTAMP,
  description VARCHAR(255),
  mcc INTEGER,
  mcc_description VARCHAR(255),
  amount DECIMAL(19,4),
  currency CHAR(3),
  cashback DECIMAL(19,4),
  category INT,
  user_id INT REFERENCES "user"(id)
);

CREATE TABLE "mcc" (
  id SERIAL PRIMARY KEY,
  code INTEGER,
  description VARCHAR(255)
);

INSERT INTO mcc ("code", "description") VALUES
  (7623, 'A/C, Refrigeration Repair'),
  (8931, 'Accounting/Bookkeeping Services'),
  (7311, 'Advertising Services'),
  (763, 'Agricultural Cooperative'),
  (4511, 'Airlines, Air Carriers'),
  (4582, 'Airports, Flying Fields'),
  (4119, 'Ambulance Services'),
  (7996, 'Amusement Parks/Carnivals'),
  (5937, 'Antique Reproductions'),
  (5932, 'Antique Shops'),
  (7998, 'Aquariums'),
  (8911, 'Architectural/Surveying Services'),
  (5971, 'Art Dealers and Galleries'),
  (5970, 'Artist’s Supply and Craft Shops'),
  (5531, 'Auto and Home Supply Stores'),
  (7531, 'Auto Body Repair Shops'),
  (7535, 'Auto Paint Shops'),
  (7538, 'Auto Service Shops'),
  (6011, 'Automated Cash Disburse'),
  (5542, 'Automated Fuel Dispensers'),
  (8675, 'Automobile Associations'),
  (5533, 'Automotive Parts and Accessories Stores'),
  (5532, 'Automotive Tire Stores'),
  (9223, 'Bail and Bond Payments (payment to the surety for the bond, not the actual bond paid to the government agency)'),
  (5462, 'Bakeries'),
  (7929, 'Bands, Orchestras'),
  (7230, 'Barber and Beauty Shops'),
  (7995, 'Betting/Casino Gambling'),
  (5940, 'Bicycle Shops'),
  (7932, 'Billiard/Pool Establishments'),
  (5551, 'Boat Dealers'),
  (4457, 'Boat Rentals and Leases'),
  (5942, 'Book Stores'),
  (5192, 'Books, Periodicals, and Newspapers'),
  (7933, 'Bowling Alleys'),
  (4131, 'Bus Lines'),
  (8244, 'Business/Secretarial Schools'),
  (7278, 'Buying/Shopping Services'),
  (4899, 'Cable, Satellite, and Other Pay Television and Radio'),
  (5946, 'Camera and Photographic Supply Stores'),
  (5441, 'Candy, Nut, and Confectionery Stores'),
  (5511, 'Car and Truck Dealers (New & Used) Sales, Service, Repairs Parts and Leasing'),
  (5521, 'Car and Truck Dealers (Used Only) Sales, Service, Repairs Parts and Leasing'),
  (7512, 'Car Rental Agencies'),
  (7542, 'Car Washes'),
  (1750, 'Carpentry Contractors'),
  (7217, 'Carpet/Upholstery Cleaning'),
  (5811, 'Caterers'),
  (8398, 'Charitable and Social Service Organizations - Fundraising'),
  (5169, 'Chemicals and Allied Products (Not Elsewhere Classified)'),
  (8351, 'Child Care Services'),
  (5641, 'Children’s and Infant’s Wear Stores'),
  (8049, 'Chiropodists, Podiatrists'),
  (8041, 'Chiropractors'),
  (5993, 'Cigar Stores and Stands'),
  (8641, 'Civic, Social, Fraternal Associations'),
  (7349, 'Cleaning and Maintenance'),
  (7296, 'Clothing Rental'),
  (8220, 'Colleges, Universities'),
  (5046, 'Commercial Equipment (Not Elsewhere Classified)'),
  (5139, 'Commercial Footwear'),
  (7333, 'Commercial Photography, Art and Graphics'),
  (4111, 'Commuter Transport, Ferries'),
  (4816, 'Computer Network Services'),
  (7372, 'Computer Programming'),
  (7379, 'Computer Repair'),
  (5734, 'Computer Software Stores'),
  (5045, 'Computers, Peripherals, and Software'),
  (1771, 'Concrete Work Contractors'),
  (5039, 'Construction Materials (Not Elsewhere Classified)'),
  (7392, 'Consulting, Public Relations'),
  (8241, 'Correspondence Schools'),
  (5977, 'Cosmetic Stores'),
  (7277, 'Counseling Services'),
  (7997, 'Country Clubs'),
  (4215, 'Courier Services'),
  (9211, 'Court Costs, Including Alimony and Child Support - Courts of Law'),
  (7321, 'Credit Reporting Agencies'),
  (4411, 'Cruise Lines'),
  (5451, 'Dairy Products Stores'),
  (7911, 'Dance Hall, Studios, Schools'),
  (7273, 'Dating/Escort Services'),
  (8021, 'Dentists, Orthodontists'),
  (5311, 'Department Stores'),
  (7393, 'Detective Agencies'),
  (5964, 'Direct Marketing - Catalog Merchant'),
  (5965, 'Direct Marketing - Combination Catalog and Retail Merchant'),
  (5967, 'Direct Marketing - Inbound Tele'),
  (5960, 'Direct Marketing - Insurance Services'),
  (5969, 'Direct Marketing - Other'),
  (5966, 'Direct Marketing - Outbound Telservices'),
  (5968, 'Direct Marketing - Subscription'),
  (5962, 'Direct Marketing - Travel'),
  (5310, 'Discount Stores'),
  (8011, 'Doctors'),
  (5963, 'Door-To-Door Sales'),
  (5714, 'Drapery, Window Covering, and Upholstery Stores'),
  (5813, 'Drinking Places'),
  (5912, 'Drug Stores and Pharmacies'),
  (5122, 'Drugs, Drug Proprietaries, and Druggist Sundries'),
  (7216, 'Dry Cleaners'),
  (5099, 'Durable Goods (Not Elsewhere Classified)'),
  (5309, 'Duty Free Stores'),
  (5812, 'Eating Places, Restaurants'),
  (8299, 'Educational Services'),
  (5997, 'Electric Razor Stores'),
  (1731, 'Electrical Contractors'),
  (5065, 'Electrical Parts and Equipment'),
  (7622, 'Electronics Repair Shops'),
  (5732, 'Electronics Stores'),
  (8211, 'Elementary, Secondary Schools'),
  (7361, 'Employment/Temp Agencies'),
  (7394, 'Equipment Rental'),
  (7342, 'Exterminating Services'),
  (5651, 'Family Clothing Stores'),
  (5814, 'Fast Food Restaurants'),
  (6012, 'Financial Institutions'),
  (9222, 'Fines - Government Administrative Entities'),
  (5718, 'Fireplace, Fireplace Screens, and Accessories Stores'),
  (5713, 'Floor Covering Stores'),
  (5992, 'Florists'),
  (5193, 'Florists Supplies, Nursery Stock, and Flowers'),
  (5422, 'Freezer and Locker Meat Provisioners'),
  (5983, 'Fuel Dealers (Non Automotive)'),
  (7261, 'Funeral Services, Crematories'),
  (7641, 'Furniture Repair, Refinishing'),
  (5712, 'Furniture, Home Furnishings, and Equipment Stores, Except Appliances'),
  (5681, 'Furriers and Fur Shops'),
  (1520, 'General Contractors'),
  (5947, 'Gift, Card, Novelty, and Souvenir Shops'),
  (5231, 'Glass, Paint, and Wallpaper Stores'),
  (5950, 'Glassware, Crystal Stores'),
  (7992, 'Golf Courses - Public'),
  (9399, 'Government Services (Not Elsewhere Classified)'),
  (5411, 'Grocery Stores, Supermarkets'),
  (5251, 'Hardware Stores'),
  (5072, 'Hardware, Equipment, and Supplies'),
  (7298, 'Health and Beauty Spas'),
  (5975, 'Hearing Aids Sales and Supplies'),
  (1711, 'Heating, Plumbing, A/C'),
  (5945, 'Hobby, Toy, and Game Shops'),
  (5200, 'Home Supply Warehouse Stores'),
  (8062, 'Hospitals'),
  (7011, 'Hotels, Motels, and Resorts'),
  (5722, 'Household Appliance Stores'),
  (5085, 'Industrial Supplies (Not Elsewhere Classified)'),
  (7375, 'Information Retrieval Services'),
  (6399, 'Insurance - Default'),
  (6300, 'Insurance Underwriting, Premiums'),
  (9950, 'Intra-Company Purchases'),
  (5944, 'Jewelry Stores, Watches, Clocks, and Silverware Stores'),
  (780, 'Landscaping Services'),
  (7211, 'Laundries'),
  (7210, 'Laundry, Cleaning Services'),
  (8111, 'Legal Services, Attorneys'),
  (5948, 'Luggage and Leather Goods Stores'),
  (5211, 'Lumber, Building Materials Stores'),
  (6010, 'Manual Cash Disburse'),
  (4468, 'Marinas, Service and Supplies'),
  (1740, 'Masonry, Stonework, and Plaster'),
  (7297, 'Massage Parlors'),
  (8071, 'Medical and Dental Labs'),
  (8099, 'Medical Services'),
  (5047, 'Medical, Dental, Ophthalmic, and Hospital Equipment and Supplies'),
  (8699, 'Membership Organizations'),
  (5611, 'Men’s and Boy’s Clothing and Accessories Stores'),
  (5691, 'Men’s, Women’s Clothing Stores'),
  (5051, 'Metal Service Centers'),
  (5699, 'Miscellaneous Apparel and Accessory Shops'),
  (5599, 'Miscellaneous Auto Dealers'),
  (7399, 'Miscellaneous Business Services'),
  (5499, 'Miscellaneous Food Stores - Convenience Stores and Specialty Markets'),
  (5399, 'Miscellaneous General Merchandise'),
  (7299, 'Miscellaneous General Services'),
  (5719, 'Miscellaneous Home Furnishing Specialty Stores'),
  (2741, 'Miscellaneous Publishing and Printing'),
  (7999, 'Miscellaneous Recreation Services'),
  (7699, 'Miscellaneous Repair Shops'),
  (5999, 'Miscellaneous Specialty Retail'),
  (5271, 'Mobile Home Dealers'),
  (7832, 'Motion Picture Theaters'),
  (4214, 'Motor Freight Carriers and Trucking - Local and Long Distance, Moving and Storage Companies, and Local Delivery Services'),
  (5592, 'Motor Homes Dealers'),
  (5013, 'Motor Vehicle Supplies and New Parts'),
  (5571, 'Motorcycle Shops and Dealers'),
  (5561, 'Motorcycle Shops, Dealersv'),
  (5733, 'Music Stores-Musical Instruments, Pianos, and Sheet Music'),
  (5994, 'News Dealers and Newsstands'),
  (6051, 'Non-FI, Money Orders'),
  (5199, 'Nondurable Goods (Not Elsewhere Classified)'),
  (5261, 'Nurseries, Lawn and Garden Supply Stores'),
  (8050, 'Nursing/Personal Care'),
  (5021, 'Office and Commercial Furniture'),
  (8043, 'Opticians, Eyeglasses'),
  (8042, 'Optometrists, Ophthalmologist'),
  (5976, 'Orthopedic Goods - Prosthetic Devices'),
  (8031, 'Osteopaths'),
  (5921, 'Package Stores-Beer, Wine, and Liquor'),
  (5198, 'Paints, Varnishes, and Supplies'),
  (7523, 'Parking Lots, Garages'),
  (4112, 'Passenger Railways'),
  (5933, 'Pawn Shops'),
  (5995, 'Pet Shops, Pet Food, and Supplies'),
  (5172, 'Petroleum and Petroleum Products'),
  (7395, 'Photo Developing'),
  (7221, 'Photographic Studios'),
  (5044, 'Photographic, Photocopy, Microfilm Equipment, and Supplies'),
  (7829, 'Picture/Video Production'),
  (5131, 'Piece Goods, Notions, and Other Dry Goods'),
  (5074, 'Plumbing, Heating Equipment, and Supplies'),
  (8651, 'Political Organizations'),
  (9402, 'Postal Services - Government Only'),
  (5094, 'Precious Stones and Metals, Watches and Jewelry'),
  (8999, 'Professional Services'),
  (4225, 'Public Warehousing and Storage - Farm Products, Refrigerated Goods, Household Goods, and Storage'),
  (7338, 'Quick Copy, Repro, and Blueprint'),
  (4011, 'Railroads'),
  (6513, 'Real Estate Agents and Managers - Rentals'),
  (5735, 'Record Stores'),
  (7519, 'Recreational Vehicle Rentals'),
  (5973, 'Religious Goods Stores'),
  (8661, 'Religious Organizations'),
  (1761, 'Roofing/Siding, Sheet Metal'),
  (7339, 'Secretarial Support Services'),
  (6211, 'Security Brokers/Dealers'),
  (5541, 'Service Stations'),
  (5949, 'Sewing, Needlework, Fabric, and Piece Goods Stores'),
  (7251, 'Shoe Repair/Hat Cleaning'),
  (5661, 'Shoe Stores'),
  (7629, 'Small Appliance Repair'),
  (5598, 'Snowmobile Dealers'),
  (1799, 'Special Trade Contractors'),
  (2842, 'Specialty Cleaning'),
  (5941, 'Sporting Goods Stores'),
  (7032, 'Sporting/Recreation Camps'),
  (5655, 'Sports and Riding Apparel Stores'),
  (7941, 'Sports Clubs/Fields'),
  (5972, 'Stamp and Coin Stores'),
  (5111, 'Stationary, Office Supplies, Printing and Writing Paper'),
  (5943, 'Stationery Stores, Office, and School Supply Stores'),
  (5996, 'Swimming Pools Sales'),
  (5697, 'Tailors, Alterations'),
  (9311, 'Tax Payments - Government Agencies'),
  (7276, 'Tax Preparation Services'),
  (4121, 'Taxicabs/Limousines'),
  (4812, 'Telecommunication Equipment and Telephone Sales'),
  (4814, 'Telecommunication Services'),
  (4821, 'Telegraph Services'),
  (5998, 'Tent and Awning Shops'),
  (8734, 'Testing Laboratories'),
  (7922, 'Theatrical Ticket Agencies'),
  (7012, 'Timeshares'),
  (7534, 'Tire Retreading and Repair'),
  (4784, 'Tolls/Bridge Fees'),
  (7991, 'Tourist Attractions and Exhibits'),
  (7549, 'Towing Services'),
  (7033, 'Trailer Parks, Campgrounds'),
  (4789, 'Transportation Services (Not Elsewhere Classified)'),
  (4722, 'Travel Agencies, Tour Operators'),
  (7511, 'Truck Stop'),
  (7513, 'Truck/Utility Trailer Rentals'),
  (4723, 'TUI Travel - Germany'),
  (2791, 'Typesetting, Plate Making, and Related Services'),
  (5978, 'Typewriter Stores'),
  (9405, 'U.S. Federal Government Agencies or Departments'),
  (5137, 'Uniforms, Commercial Clothing'),
  (5931, 'Used Merchandise and Secondhand Stores'),
  (4900, 'Utilities'),
  (5331, 'Variety Stores'),
  (742, 'Veterinary Services'),
  (7993, 'Video Amusement Game Supplies'),
  (7994, 'Video Game Arcades'),
  (7841, 'Video Tape Rental Stores'),
  (8249, 'Vocational/Trade Schools'),
  (7631, 'Watch/Jewelry Repair'),
  (7692, 'Welding Repair'),
  (5300, 'Wholesale Clubs'),
  (5698, 'Wig and Toupee Stores'),
  (4829, 'Wires, Money Orders'),
  (5631, 'Women’s Accessory and Specialty Shops'),
  (5621, 'Women’s Ready-To-Wear Stores'),
  (5935, 'Wrecking and Salvage Yards');
